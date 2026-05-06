import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import ContactUs from "./components/ContactUs.jsx";
import CartPage from "./pages/CartPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/contact-Us",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>,
);
