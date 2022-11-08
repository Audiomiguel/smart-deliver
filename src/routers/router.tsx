import { WelcomePage } from "src/pages/user/welcome";
import { Route, Routes } from "react-router-dom";
import { RouterLayout } from "src/common/Routerlayout";
import { HomePage } from "src/pages/home";
import { LoginPage } from "src/pages/login";
import { NavBarUser } from "src/common/NavBarUser";
import { NavBar } from "src/common/NavBar";
import { PaymentPage } from "src/pages/user/payment";
import { PaymentDetailPage } from "src/pages/user/payment-detail";
import { AdminHomePage } from "src/pages/admin/home";
import { UserReceiptPage } from "src/pages/user/receipt";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<RouterLayout navBar={<NavBar />} />}>
				<Route path="/" element={<HomePage />} />
			</Route>
			<Route path="/login" element={<LoginPage />} />

			<Route path="/user" element={<RouterLayout navBar={<NavBarUser />} />}>
				<Route path="/user" element={<WelcomePage />} />
				<Route path="/user/payment" element={<PaymentPage />} />
				<Route path="/user/payment-detailt" element={<PaymentDetailPage />} />
				<Route path="/user/receipt" element={<UserReceiptPage />} />
			</Route>

			<Route path="/admin" element={<RouterLayout navBar={<NavBarUser />} />}>
				<Route path="/admin" element={<AdminHomePage />} />
			</Route>
		</Routes>
	);
};
