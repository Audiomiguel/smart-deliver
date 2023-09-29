import { WelcomePage } from 'src/pages/user/welcome';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouterLayout } from 'src/common/Routerlayout';
import { HomePage } from 'src/pages/home';
import { LoginPage } from 'src/pages/login';
import { NavBarUser } from 'src/common/NavBarUser';
import { NavBar } from 'src/common/NavBar';
import { PaymentPage } from 'src/pages/user/payment';
import { PaymentDetailPage } from 'src/pages/user/payment-detail';
import { AdminHomePage } from 'src/pages/admin/home';
import { UserReceiptPage } from 'src/pages/user/receipt';
import { SignUpPage } from 'src/pages/admin/home/sign-up';

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/courier-chain"
        element={<RouterLayout navBar={<NavBar />} />}
      >
        <Route path="/courier-chain" element={<HomePage />} />
      </Route>
      <Route path="/courier-chain/login" element={<LoginPage />} />
      <Route path="/courier-chain/sign-up" element={<SignUpPage />} />

      <Route
        path="/courier-chain/user"
        element={<RouterLayout navBar={<NavBar />} />}
      >
        <Route path="/courier-chain/user" element={<WelcomePage />} />
        <Route path="/courier-chain/user/payment" element={<PaymentPage />} />
        <Route
          path="/courier-chain/user/payment-detailt"
          element={<PaymentDetailPage />}
        />
        <Route
          path="/courier-chain/user/receipt"
          element={<UserReceiptPage />}
        />
      </Route>

      <Route
        path="/courier-chain/admin"
        element={<RouterLayout navBar={<NavBarUser />} />}
      >
        <Route path="/courier-chain/admin" element={<AdminHomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/courier-chain" />} />
    </Routes>
  );
};
