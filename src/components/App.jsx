import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/Home/Home"));
const ContactsPage = lazy(() => import("../pages/Contacts/Contacts"));
const RegisterPage = lazy(() => import("../pages/Register/Register"));
const LoginPage = lazy(() => import("../pages/Login/Login"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
