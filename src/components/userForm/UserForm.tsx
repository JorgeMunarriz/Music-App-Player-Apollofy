import { useForm } from 'react-hook-form'
import { useUserContext } from '../../context/UserContext';
import { useAuth0 } from '@auth0/auth0-react';
import { useState,FC } from 'react';
import { AlertMessageSuccess } from '../confirmationMessage/AlertMessageSuccess';
import { UserFormContainer } from './userFormContainer';
import { LoaderForm } from '..';


interface userUpdate {
    userName: string;
    userEmail: string;
    userImage: string;
}
interface userFormModal {
  closeModal1: () => void;
}

export const UserForms: FC <userFormModal> = ({closeModal1}) => {
    const { userData, updatedUserData } = useUserContext();
    const { getAccessTokenSilently } = useAuth0();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const form = useForm<userUpdate>({
        defaultValues: {
            userName: userData?.userName,
            userEmail: userData?.userEmail
        }
    });
    const { register, handleSubmit, formState:{errors} } = form;
    const onSubmit = async (userUpdate: userUpdate) => {
        try {
          setIsLoading(true)
          const response = await updatedUserData(userUpdate, userData?.id ?? '', getAccessTokenSilently);
          if (response.status.toString() === 'success') {
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                closeModal1()
            }, 2000)
        }
    } catch (error) {
        console.error('Error user update:', error);
    }  finally {
        setIsLoading(false);
    }
};


    return (
        <UserFormContainer onSubmit={handleSubmit(onSubmit)}>
            {isLoading && <LoaderForm />}
                {isSuccess && <AlertMessageSuccess>
                 User data updated!
                </AlertMessageSuccess>}
            <div className="flex">
            <div className="login color">EDIT USER</div>
            <label className="color">Username :</label>
          <input type="text" className="input" placeholder="Enter your name"
            {...register("userName", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            autoComplete="off"
          />
            {errors.userName && <p className="error_input">{errors.userName.message}</p>}
            <label className="color">Email :</label>
          <input type="text" className="input" placeholder="Enter your email"
            {...register("userEmail", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email must be a valid email address",
              },
            })}
            autoComplete="off"
          />
          {errors.userEmail && <p className="error_input">{errors.userEmail.message}</p>}
          <button type="submit" className="button_userForm">EDIT</button>

            </div>
        </UserFormContainer>
      );
        }
