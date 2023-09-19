import styled from "styled-components";
import { useState, FC } from 'react'
import { AlertMessageSuccess, LoaderForm } from "../../..";
import { useForm } from 'react-hook-form'
import { useUserMusicContext } from "../../../../context/UserMusicContext";

interface userFormModal {
  closeModal: () => void;
}

interface CreateAlbumType {
  albumName: string,
  albumImage: string,
  albumCreatedAt: string,
  genreId: string[],
  artistId: string[],
  trackId: string[],
}



export const AlbumCreateForm: FC<userFormModal> = ({ closeModal }) => {
  const { createNewAlbum,tracks } = useUserMusicContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm({
    defaultValues: {
      albumName: '',
      albumImage: '',
      genreId: [],
      artistId: [],
      trackId: [],
      albumCreatedAt: new Date().toISOString(),
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const generos = [
    { id: "6501915fd1080d57fa618f56", name: "Rock" },
    { id: "65017fdfd78b706a5fdf4513", name: "Hip hop" },
    { id: "650191dcd1080d57fa618f61", name: "Reggaeton" },
  ];
  const artist = [
    { id: "65018d00f6f55225268a30d5", name: "pepe2" },
  ];

  const onSubmit = async (newAlbumData: CreateAlbumType) => {
    try {

      setIsLoading(true);
      const formData = new FormData();
      formData.append('albumName', newAlbumData.albumName);
      formData.append('albumImage', newAlbumData.albumImage[0]);
      formData.append('albumCreatedAt', newAlbumData.albumCreatedAt);
      // se utiliza foreach para agregar todos los campos selecionados
      if (Array.isArray(newAlbumData.artistId)) {
        newAlbumData.artistId.forEach((artistId) => {
          formData.append('artistId', artistId);
        });
      }

      if (Array.isArray(newAlbumData.trackId)) {
        newAlbumData.trackId.forEach((trackId) => {
          formData.append('trackId', trackId);
        });
      }
      if (Array.isArray(newAlbumData.genreId)) {
        newAlbumData.genreId.forEach((genreId) => {
          formData.append('genreId', genreId);
        });
      }
      console.log(newAlbumData)
       await createNewAlbum(formData);

        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          closeModal()
        }, 4000)

    } catch (error) {
      console.error('Error saving track:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TracksFormContainer >
      {isLoading && <LoaderForm />}
      {isSuccess && <AlertMessageSuccess>
        Album create successfully
      </AlertMessageSuccess>}
      <header>ADD Album</header>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input_box">
          <label htmlFor='albumName'>Name</label>
          <input
            {...register('albumName', {
              required: 'Name is required',
            })}
            placeholder='Enter full Name'
            type='text'
            id='albumName'
          />
          {errors.albumName && <span className="error_input">{errors.albumName.message}</span>}
        </div>
        <div className="gender_box">
          <select  {...register("genreId")}  id="genre">
            <option value="">Select genres</option>
            {generos.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.name}
              </option>
            ))}
          </select>
          <select  {...register("artistId")} id="artist">
            <option value="">Select Artist</option>
            {artist.map((artist) => (
              <option key={artist.id} value={artist.id}>
                {artist.name}
              </option>
            ))}
          </select>
          <select  {...register("trackId")} id="tracks">
            <option value="">Select tracks</option>
            {tracks.map((tracks) => (
              <option key={tracks.id} value={tracks.id}>
                {tracks.trackName}
              </option>
            ))}
          </select>
          {errors.trackId && <span className="error_input">At least one track is required</span>}
        </div>
        <div className="input_box description"  >
          <label className="label_file" htmlFor='image'>Choose a file:</label>
          <input className="inpdddut"
            id='image'
            type='file'
            accept='image/*'

            {...register('albumImage', {
              required: 'Please choose a file',
            })}

          />
          {errors.albumImage && <span className="error_input">{errors.albumImage.message}</span>}
        </div>
        <button type='submit'>ADD Album</button>
      </form>
    </TracksFormContainer>
  )
}

const TracksFormContainer = styled.section`
  max-width: 500px;
  width: 100%;
  background: linear-gradient(to right ,hsl(300, 100%, 10%), #000);
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
}

.input_box label {
  color: #f5f4e8;
  font-size: 1.2rem;
  font-weight: 700;
  padding-top: 0.3rem;
}

.form :where(.input_box input, .select_box) {
  position: relative;
  height: 35px;
  width: 100%;
  outline: none;
  font-size: 1rem;
  color: #2b1c1c;
  margin-top: 5px;
  border: 1px solid #EE4E34;
  border-radius: 6px;
  padding: 0 15px;
  background: #FCEDDA;
}

.input_box input:focus {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
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
  margin-top:  0.3rem;
}

.description {
  margin-top:  0.5rem;
}

.error_input {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  width: 14rem;
  padding: 0.5rem 0 0 0 ;
  display: flex;
  align-items: center;
  color: #EF665B;
}

.form .gender {
  column-gap: 5px;
}

.gender input {
  accent-color: #EE4E34;
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
  background: #FCEDDA;
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
  background: #EE4E34;
}

.form button:hover {
  background: #EE3E34;
   color: #f5f4e8;
}

.label_file {
  padding-top: 0.5rem;
  font-weight: bold;
  display: block;
  cursor: pointer;
}

.inpdddut[type="file"] {
  padding: 10px;
  margin-bottom: 1rem;
  border: none;
  background-color:  rgb(134, 129, 134);
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
}

 `