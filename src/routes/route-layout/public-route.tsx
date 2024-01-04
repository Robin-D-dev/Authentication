import { useSelector } from "react-redux"
import { IStore } from "../../types/store";
import { Navigate, Outlet } from "react-router-dom";

export const PublicLayout: React.FC = () => {

  const isAuthenticated = useSelector((state: IStore) => state.auth.isAuthenticated);

  return !isAuthenticated ?
    <main>
      <Outlet />
    </main> : <Navigate to={"/app/dashboard"} />
}