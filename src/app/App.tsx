import axios from "axios";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Messages from "../pages/Messages/Messages";
import { store } from "./store/store";
import User from "../pages/User/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Messages />,
  },
  {
    path: "/users/:userId",
    element: <User />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
