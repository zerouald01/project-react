import {Home, About, Categories, Register, Login, Products} from "@pages/index"
import MainLayout from '@layouts/MainLayout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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
          path: "products/:prefix",
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
