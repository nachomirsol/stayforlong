export type SearchTypes = {
	width: string;
	query: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick: (query: string) => void;
};
