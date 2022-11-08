import { Outlet } from "react-router-dom";

interface Props {
	navBar: React.ReactNode;
}
export const RouterLayout = ({ navBar }: Props) => {
	return (
		<>
			{navBar}
			<Outlet />
		</>
	);
};
