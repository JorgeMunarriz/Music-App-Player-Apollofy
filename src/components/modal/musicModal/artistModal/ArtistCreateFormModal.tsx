import styled from "styled-components";
import { useState, FC } from "react";
import { AlertMessageSuccess, LoaderForm } from "../../..";
import { useForm } from "react-hook-form";
import { useUserMusicContext } from "../../../../context/UserMusicContext";
import { useGenresContext } from "../../../../context";
import { MultiSelect } from "react-multi-select-component";
MultiSelect
interface userFormModal {
  closeModal: () => void;
}

interface CreateArtistType {
  artistName: string;
  artistImage: string;
  popularity: number;
  albumId: string[];
  genreId: string[];
}

export const ArtistCreateForm: FC<userFormModal> = ({ closeModal }) => {
  const { createNewArtist, albums } = useUserMusicContext();
  const { allGenres } = useGenresContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selected, setSelected] = useState([]);
  const form = useForm({
    defaultValues: {
      artistName: "",
      artistImage: "",
      popularity: 0,
      albumId: [],
      genreId: [],
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const genresMultiselect = allGenres.map((genres) => ({ label: genres.genreName, value: genres.genreName }));
  const popularityNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const onSubmit = async (newArtistData: CreateArtistType) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("artistName", newArtistData.artistName);
      formData.append("artistImage", newArtistData.artistImage[0]);
      formData.append("popularity", newArtistData.popularity.toString());
      // se utiliza foreach para agregar todos los campos selecionados
      if (Array.isArray(newArtistData.albumId)) {
        newArtistData.albumId.forEach((albumId) => {
          formData.append("albumId", albumId);
        });
      }
      if (Array.isArray(newArtistData.genreId)) {
        newArtistData.genreId.forEach((genreId) => {
          formData.append("genreId", genreId);
        });
      }
      await createNewArtist(formData);

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        closeModal();
      }, 4000);

    } catch (error) {
      console.error("Error saving artist:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ArtistsFormContainer>
      {isLoading && <LoaderForm />}
      {isSuccess && <AlertMessageSuccess>artist create successfully</AlertMessageSuccess>}
      <header>ADD artist</header>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input_box">
          <label htmlFor="artistName">Name</label>
          <input
            {...register("artistName", {
              required: "Name is required",
            })}
            placeholder="Enter full Name"
            type="text"
            id="artistName"
          />
          {errors.artistName && <span className="error_input">{errors.artistName.message}</span>}
        </div>
        <div className="gender_box">
          <MultiSelect {...register("genreId")} options={genresMultiselect} value={selected} onChange={setSelected} labelledBy="Select genres" />

          <select {...register("popularity")} id="popularity">
            <option value="">Select Popularity</option>
            {popularityNumbers.map((popularity) => (
              <option key={popularity}>{popularity}</option>
            ))}
          </select>
          <select {...register("albumId")} id="album">
            <option value="">Select Albums</option>
            {albums.map((album) => (
              <option key={album.id} value={album.id}>
                {album.albumName}
              </option>
            ))}
          </select>
          {errors.genreId && <span className="error_input">At least one genre is required</span>}
        </div>
        <div className="input_box description">
          <label className="label_file" htmlFor="image">
            Choose a file:
          </label>
          <input
            className="inpdut"
            id="image"
            type="file"
            accept="image/*"
            {...register("artistImage", {
              required: "Please choose a file",
            })}
          />
        </div>
        <button type="submit">ADD artist</button>
      </form>
    </ArtistsFormContainer>
  );
};

const ArtistsFormContainer = styled.section`
  /* max-width: 500px; */
  width: 100%;
  background: linear-gradient(to right, hsl(300, 100%, 10%), #000);
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  header {
    font-size: 1.5rem;
    color: #f5f4e8;
    font-weight: 600;
    text-align: center;
  }

  .form {
    margin-top: 15px;
  }
  .form .input_box {
    width: 100%;
    padding-top: 0.1rem;
    & label {
      color: #f5f4e8;
      font-size: 1.2rem;
      font-weight: 700;
      padding-top: 0.3rem;
    }
    & input:focus {
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    }
  }

  .form :where(.input_box input, .select_box) {
    position: relative;
    height: 35px;
    width: 100%;
    outline: none;
    font-size: 1rem;
    color: #2b1c1c;
    margin-top: 5px;
    border: 1px solid #ee4e34;
    border-radius: 6px;
    padding: 0 15px;
    background: #fcedda;
  }

  .form .column {
    display: flex;
    column-gap: 15px;
  }

  .form .gender_box {
    color: #f5f4e8;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 1rem;
    gap: 0.8rem;
    & select {
      font-size: 1.3rem;
      font-weight: 700;
      cursor: pointer;
    }
  }

  .form :where(.gender_option, .gender) {
    display: flex;
    align-items: center;
    column-gap: 50px;
    flex-wrap: wrap;
    margin-top: 0.3rem;
  }

  .description {
    margin-top: 0.5rem;
  }

  .error_input {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    width: 14rem;
    padding: 0.5rem 0 0 0;
    display: flex;
    align-items: center;
    color: #ef665b;
  }

  .form .gender {
    column-gap: 5px;
  }

  .gender input {
    accent-color: #ee4e34;
  }

  .form :where(.gender input, .gender label) {
    cursor: pointer;
  }

  .select_box select {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    color: #808080;
    font-size: 1rem;
    background: #fcedda;
  }

  .form button {
    /* height: 40px; */
    padding: 1.2rem 0;
    width: 100%;
    color: #000;
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 15px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #ee4e34;
    &:hover {
      background: #ee3e34;
      color: #f5f4e8;
    }
  }

  .label_file {
    padding-top: 0.5rem;
    font-weight: bold;
    display: block;
    cursor: pointer;
  }

  .inpdut[type="file"] {
    padding: 10px;
    margin-bottom: 1rem;
    border: none;
    background-color: rgb(134, 129, 134);
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
  }
`;
