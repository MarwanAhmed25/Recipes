import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.scss"
import Layout from "./Components/Layout/Layout";
import Recipe from "./Components/Recipe/Recipe";
import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

let routers:any = createBrowserRouter([
  {path:"", element: <Layout />, children:[
    {index: true, element: <Recipe />},
    {path:"meals/:id", element: <RecipeDetail />}
  ]}
]);

function App():any {
  
  let queryClient = new QueryClient();

  return (
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routers}></RouterProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
  )
}

export default App
