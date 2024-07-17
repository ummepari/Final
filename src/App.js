import "./assets/css/App.css";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import { AlertProvider } from "./context/AlertContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/reservations",
      element: <BookingPage />,
    },
  ]);

  return (
    <ChakraProvider>
      <AlertProvider>
        <RouterProvider router={router} />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
