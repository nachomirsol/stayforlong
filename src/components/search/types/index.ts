export type SearchTypes = {
	query: string;
	type?: string;
	name?: string;
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick: (query: string) => void;
	onKeyPress: (e: React.SyntheticEvent<EventTarget>, query: string) => void;
};
