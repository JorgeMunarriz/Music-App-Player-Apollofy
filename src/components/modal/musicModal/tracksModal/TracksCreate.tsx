import styled from "styled-components";
import { useState, FC } from "react";
import { AlertMessageSuccess, LoaderForm } from "../../..";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../../../context";
import { useUserMusicContext } from "../../../../context/UserMusicContext";

interface userFormModal {
  closeModal: () => void;
}

interface CreateTrackType {
  trackName: string;
  trackUrl: string;
  trackImage: string;
  trackCreatedAt: string;
  genreId: string[];
  artistId: string[];
  albumId: string[];
}

export const TracksCreateForm: FC<userFormModal> = ({ closeModal }) => {
<<<<<<< HEAD
  const { userData, } = useUserContext();
  const { createUserTracks, albums } = useUserMusicContext();
=======
  const { userData } = useUserContext();
  const { createUserTracks } = useUserMusicContext();
>>>>>>> 29acfa93ecf8225911bf375b5b4cd0005ac97186
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm({
    defaultValues: {
      trackName: "",
      trackImage: "",
      trackUrl: "",
      genreId: [],
      artistId: [],
      albumId: [],
      trackCreatedAt: new Date().toISOString(),
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const generos = [
    { id: "6501915fd1080d57fa618f56", name: "Rock" },
    { id: "65017fdfd78b706a5fdf4513", name: "Hip hop" },
    { id: "650191dcd1080d57fa618f61", name: "Reggaeton" },
  ];
<<<<<<< HEAD
  const artist = [
    { id: "65018d00f6f55225268a30d5", name: "pepe2" },
  ];

=======
  const artist = [{ id: "65018d00f6f55225268a30d5", name: "pepe2" }];
  const album = [
    { id: "650436027b7f8a478d03fbd0", name: "Thriller" },
    { id: "65043642224b44978b05e975", name: "Thriller" },
    { id: "65043c461663adbc9fc2c444", name: "Thriller2" },
  ];
>>>>>>> 29acfa93ecf8225911bf375b5b4cd0005ac97186

  const onSubmit = async (newTrackData: CreateTrackType) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("trackName", newTrackData.trackName);
      formData.append("trackCreatedAt", newTrackData.trackCreatedAt);
      formData.append("trackUrl", newTrackData.trackUrl[0]);
      formData.append("trackImage", newTrackData.trackImage[0]);
      // se utiliza foreach para agregar todos los campos selecionados
      if (Array.isArray(newTrackData.artistId)) {
        newTrackData.artistId.forEach((artistId) => {
          formData.append("artistId", artistId);
        });
      }

      if (Array.isArray(newTrackData.albumId)) {
        newTrackData.albumId.forEach((albumId) => {
          formData.append("albumId", albumId);
        });
      }
      if (Array.isArray(newTrackData.genreId)) {
        newTrackData.genreId.forEach((genreId) => {
          formData.append("genreId", genreId);
        });
      }
<<<<<<< HEAD
      await createUserTracks(userData?.id ?? '', formData);

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        closeModal()
      }, 4000)

=======
      const response = await createUserTracks(userData?.id ?? "", formData);

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          closeModal();
        }, 4000);
      }
>>>>>>> 29acfa93ecf8225911bf375b5b4cd0005ac97186
    } catch (error) {
      console.error("Error saving track:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TracksFormContainer>
      {isLoading && <LoaderForm />}
      {isSuccess && <AlertMessageSuccess>Track create successfully</AlertMessageSuccess>}
      <header>ADD Track</header>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input_box">
          <label htmlFor="trackName" className="form__input_box-label">
            Name
          </label>
          <input
            {...register("trackName", {
              required: "Name is required",
            })}
            placeholder="Enter full Name"
            type="text"
            id="trackName"
          />
          {errors.trackName && <span className="error_input">{errors.trackName.message}</span>}
        </div>
<<<<<<< HEAD
        <div className="gender_box">
          <select  {...register("genreId")} id="genre">
=======
        <div className="form__gender_box">
          <select {...register("genreId")} id="genre">
>>>>>>> 29acfa93ecf8225911bf375b5b4cd0005ac97186
            <option value="">Select genres</option>
            {generos.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.name}
              </option>
            ))}
          </select>
          <select {...register("artistId")} id="artist">
            <option value="">Select Artist</option>
            {artist.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.name}
              </option>
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
        <div className="form__input_box description">
          <label className="form__input_box-label-file" htmlFor="image">
            Choose a file:
          </label>
          <input
            className="form__input_box-input"
            id="image"
            type="file"
            accept="image/*"
            {...register("trackImage", {
              required: "Please choose a file",
            })}
          />
          <label className="form__input_box-label-file" htmlFor="audio">
            Choose a track:
          </label>
          <input
            className="form__input_box-input"
            id="audio"
            type="file"
            accept="audio/mp3, audio/wav"
            {...register("trackUrl", {
              required: "Please choose an audio file",
            })}
          />
          {errors.trackUrl && <span className="error_input">{errors.trackUrl.message}</span>}
        </div>
        <button type="submit">ADD Track</button>
      </form>
    </TracksFormContainer>
  );
};

const TracksFormContainer = styled.section`
  max-width: 500px;
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
    &__input_box {
      width: 100%;
      padding-top: 0.1rem;
      &-label {
        color: #f5f4e8;
        font-size: 1.2rem;
        font-weight: 700;
        padding-top: 0.3rem;
        &-file {
          padding-top: 0.5rem;
          font-weight: bold;
          display: block;
          cursor: pointer;
        }
      }
      & input:focus {
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
      }
      &-input[type="file"] {
        padding: 10px;
        margin-bottom: 1rem;
        border: none;
        background-color: rgb(134, 129, 134);
        border-radius: 5px;
        width: 100%;
        cursor: pointer;
      }
      & input,
      .select_box {
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
    }
    &__gender_box {
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
    &:where(.input_box input, .select_box) {
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
    &:where(.gender_option, .gender) {
      display: flex;
      align-items: center;
      column-gap: 50px;
      flex-wrap: wrap;
      margin-top: 0.3rem;
    }
    & button {
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

  .select_box select {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    color: #808080;
    font-size: 1rem;
    background: #fcedda;
  }

  
`;
