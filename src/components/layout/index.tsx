/** Types */
import { LayoutTypes } from './types';

export const Layout = ({ children }: LayoutTypes) => {
	return <div className='layout'>{children}</div>;
};
