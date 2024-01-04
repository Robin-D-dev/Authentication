import React from "react";
import './assets/stylesheets/core/global.scss';
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./reducers/auth";
import { IStore } from "./types/store";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: IStore) => state.auth.isAuthenticated);
  return (
    <div className="App">
      {
        isAuthenticated ?
          <Button variant="link" className="text-error" onClick={() => dispatch(logout())}>Logout</Button>
          : null
      }
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
