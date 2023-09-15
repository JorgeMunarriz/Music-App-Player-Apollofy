import styled from "styled-components";
import {useState,FC} from 'react'
import { AlertMessageSuccess, LoaderForm } from "../../..";
import { useForm } from 'react-hook-form'
import { useUserContext } from "../../../../context";
import { useUserMusicContext } from "../../../../context/UserMusicContext";

interface userFormModal {
    closeModal: () => void;
  }

export const TracksCreateForm: FC <userFormModal> = ({closeModal}) => {
    const {userData, } = useUserContext();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const form = useForm({
        defaultValues: {
            title: 'El taxi',
            year: 1900,
            description: '',
            language: '',
            image: '',
            genre: '',
        },
    });

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

   return (
    <TracksFormContainer >
            {isLoading && <LoaderForm />}
                {isSuccess && <AlertMessageSuccess>
                    Track create successfully
                </AlertMessageSuccess>}
            <header>ADD Track</header>
            <form className="form" >
                <div className="input_box">
                    <label htmlFor='title'>Name</label>
                    <input
                        {...register('title', {
                            required: 'Title is required',
                        })}
                        placeholder='Enter full title'
                        type='text'
                        id='title'
                    />
                    {errors.title && <span className="error_input">{errors.title.message}</span>}
                </div>
                <div className="gender_box">
                    <label htmlFor='genre'>Gender</label>
                    <div className="gender_option">
                        <div className="gender">
                            <input {...register("genre", { required: true })} id="check-action" type="radio" value="64e6528e8c0d6c104567dc96" />
                            <label htmlFor="check-action">Rock</label>
                        </div>
                        <div className="gender">
                            <input {...register("genre", { required: true })} id="check-horror" type="radio" value="64e65b981c47fa8590a8fb1e" />
                            <label htmlFor="check-horror">Hip hop</label>
                        </div>
                        <div className="gender">
                            <input {...register("genre", { required: true })} id="check-comedy" type="radio" value="64e65b8f1c47fa8590a8fb1d" />
                            <label htmlFor="check-comedy">Reggaeton</label>
                        </div>
                    </div>
                    {errors.genre && <span className="error_input">Genre is required</span>}
                </div>
                <div className="input_box description"  >
                    <label className="label_file" htmlFor='image'>Choose a file:</label>
                    <input className="inpdddut"
                        id='image'
                        type='file'
                        accept='image/*'

                        {...register('image', {
                            required: 'Please choose a file',
                        })}

                    />
                    <label className="label_file" htmlFor='image'>Choose a track:</label>
                    <input className="inpdddut"
                        id='image'
                        type='file'
                        accept='image/*'

                        {...register('image', {
                            required: 'Please choose a file',
                        })}

                    />
                    {errors.image && <span className="error_input">{errors.image.message}</span>}
                </div>
                <button type='submit'>ADD Track</button>
            </form>
        </TracksFormContainer>
   )
 }

 const TracksFormContainer = styled.section`
  max-width: 500px;
  width: 100%;
  background: var(--color-background-main);
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
  margin-top: 0.3rem;
  color: #f5f4e8;
  font-size: 1.2rem;
  font-weight: 700;
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