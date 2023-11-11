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
        path="/smart-deliver"
        element={<RouterLayout navBar={<NavBar />} />}
      >
        <Route path="/smart-deliver" element={<HomePage />} />
      </Route>
      <Route path="/smart-deliver/login" element={<LoginPage />} />
      <Route path="/smart-deliver/sign-up" element={<SignUpPage />} />

      <Route
        path="/smart-deliver/user"
        element={<RouterLayout navBar={<NavBar />} />}
      >
        <Route path="/smart-deliver/user" element={<WelcomePage />} />
        <Route path="/smart-deliver/user/payment" element={<PaymentPage />} />
        <Route
          path="/smart-deliver/user/payment-detailt"
          element={<PaymentDetailPage />}
        />
        <Route
          path="/smart-deliver/user/receipt"
          element={<UserReceiptPage />}
        />
      </Route>

      <Route
        path="/smart-deliver/admin"
        element={<RouterLayout navBar={<NavBarUser />} />}
      >
        <Route path="/smart-deliver/admin" element={<AdminHomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/smart-deliver" />} />
    </Routes>
  );
};
