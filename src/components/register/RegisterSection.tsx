import {useRef, useEffect , lazy, Suspense, LazyExoticComponent, ComponentType} from 'react';
import {useNavigate} from 'react-router';
import InputForm from '../inputsform/InputForm';
import {useState, ChangeEventHandler, MouseEventHandler} from 'react';
import {RegisterFormState} from '../../types/authContext';
import {Button, RegisterContainerStyles} from '..';
import RegisterLoader from '../../assets/skeleton/registerSkeleton';
type User = RegisterFormState & {id: number};

const InitialValue: RegisterFormState = {
	id: Date.now(),
	name: '',
	password: '',
	isLogged: true,
	email: '',
	confirmPassword: '',
};

const LazyInput: LazyExoticComponent<ComponentType<any>> = lazy(() => {
	return new Promise((resolve) => {
	  setTimeout(() => {
		return resolve(import("../inputsform/InputForm"));
	  }, 3000);
	});
  });
  
export const RegisterSection = () => {
	const [form, setForm] = useState(InitialValue);
	const inputRef = useRef<HTMLInputElement>(null);
	// const [users ,setUsers] = useState<User[]>([])

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);
	const navigate = useNavigate();

	const handleSubmit = (user: RegisterFormState) => {
		setForm({...form, id: Date.now()});
		// setUsers([...users, {...user, id:Date.now()}])
		localStorage.setItem('form', JSON.stringify(form));
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({target}) => {
		const name = target.name as keyof RegisterFormState;
		setForm({...form, [name]: target.value});
	};

	const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		handleSubmit(form);
		setForm(InitialValue);
		navigate('/home');
	};

	return (
		<RegisterContainerStyles>
			<h2 className="logincontainer__h2">Sign In </h2>

			<div className="logincontainer__div">
				
				<Suspense fallback={<RegisterLoader />}><LazyInput inputRef={inputRef} placeholder="Insert user name" type="text" name="name" handleChange={handleChange} value={form.name} /></Suspense>
			</div>
			<div className="logincontainer__div">
				
			<Suspense fallback={<RegisterLoader />}><LazyInput inputRef={inputRef} placeholder="Insert user email" type="email" name="name" handleChange={handleChange} value={form.email} /></Suspense>
			</div>
			<div>
				
			<Suspense fallback={<RegisterLoader />}><LazyInput placeholder="Insert user password" type="password" name="password" handleChange={handleChange} value={form.password} /></Suspense>
			</div>
			<Button handleClick={handleClick}>Sign In</Button>
		</RegisterContainerStyles>
	);
};
