export type UserProps = {
	login?: () => void;
	logout?: () => void;
	name?: string;
	id?: number;
	isAuthenticated?: boolean;
    children?: JSX.Element
};


