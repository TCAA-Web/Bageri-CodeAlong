import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { UserContextProvider } from "../context/userContext";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
    </>
  );
}
