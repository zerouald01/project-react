import {Home, About, Categories, Register, Login, Products, Cart} from "@pages/index"
import MainLayout from '@layouts/MainLayout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from "@pages/Error/Error";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "/products/:prefix",
          element: <Products />,
          loader: ({ params }) => {
            if (
              typeof params.prefix !== "string" ||
              !/^[a-z]+$/i.test(params.prefix)
            ) {
              throw new Response("Bad Request", {
                statusText: "Category Not Found",
                status: 400,
              });
            }
            return true;
          },
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path : "about-us",
          element : <About />
        },
        {
          path : "/cart",
          element : <Cart />
        }
      ],
    },
  ]);

const App = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
