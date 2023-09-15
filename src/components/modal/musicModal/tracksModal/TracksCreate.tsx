import styled from "styled-components";
import { useState, FC } from 'react'
import { AlertMessageSuccess, LoaderForm } from "../../..";
import { useForm } from 'react-hook-form'
import { useUserContext } from "../../../../context";
import { useUserMusicContext } from "../../../../context/UserMusicContext";

interface userFormModal {
  closeModal: () => void;
}

interface CreateTrackType {
  trackName: string,
  trackUrl: string,
  trackImage: string,
  trackCreatedAt?: string,
  genreId: string[],
  artistId: string[],
  albumId: string[],
}

export const TracksCreateForm: FC<userFormModal> = ({ closeModal }) => {
  const { userData, } = useUserContext();
  const { createUserTracks } = useUserMusicContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm({
    defaultValues: {
      trackName: '',
      trackImage: '',
      trackUrl: '',
      genreId: [],
      artistId: [],
      albumId: []
    },
    mode: 'onChange'
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const generos = [
    { id: "64e6528e8c0d6c104567dc96", name: "Rock" },
    { id: "64e65b981c47fa8590a8fb1e", name: "Hip hop" },
    { id: "64e65b8f1c47fa8590a8fb1d", name: "Reggaeton" },
  ];

  const onSubmit = async (newMovieData: CreateTrackType) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('trackName', newMovieData.trackName);
      formData.append('trackUrl', newMovieData.trackUrl[0]);
      formData.append('trackImage', newMovieData.trackImage[0]);
      // se utiliza foreach para agregar todos los campos selecionados
      newMovieData.artistId.forEach((artistId) => {
        formData.append('artistId', artistId);
      });
      newMovieData.albumId.forEach((albumId) => {
        formData.append('albumId', albumId);
      });
      newMovieData.genreId.forEach((genreId) => {
        formData.append('genreId', genreId);
      });

      const response = await createUserTracks(userData?.id ?? '', formData);

      if (response.status.toString() === 'success') {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          closeModal()
        }, 4000)
      }
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
        Track create successfully
      </AlertMessageSuccess>}
      <header>ADD Track</header>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input_box">
          <label htmlFor='trackName'>Name</label>
          <input
            {...register('trackName', {
              required: 'Name is required',
            })}
            placeholder='Enter full Name'
            type='text'
            id='trackName'
          />
          {errors.trackName && <span className="error_input">{errors.trackName.message}</span>}
        </div>
        <div className="gender_box">
          <select  {...register("genreId")} multiple id="genre">
            <option value="">Select genres</option>
            {generos.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.name}
              </option>
            ))}
          </select>
          <select  {...register("artistId")} multiple id="artist">
            <option value="">Select Artist</option>
            {generos.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.name}
              </option>
            ))}
          </select>
          <select  {...register("albumId")} multiple id="album">
            <option value="">Select Albums</option>
            {generos.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.name}
              </option>
            ))}
          </select>
          {errors.genreId && <span className="error_input">At least one genre is required</span>}
        </div>
        <div className="input_box description"  >
          <label className="label_file" htmlFor='image'>Choose a file:</label>
          <input className="inpdddut"
            id='image'
            type='file'
            accept='image/*'

            {...register('trackImage', {
              required: 'Please choose a file',
            })}

          />
          <label className="label_file" htmlFor='audio'>Choose a track:</label>
          <input className="inpdddut"
            id='audio'
            type='file'
            accept='audio/mp3, audio/wav'

            {...register('trackUrl', {
              required: 'Please choose an audio file',
            })}

          />
          {errors.trackUrl && <span className="error_input">{errors.trackUrl.message}</span>}
        </div>
        <button type='submit'>ADD Track</button>
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