import { createBrowserRouter, } from "react-router-dom";
import Home from "../components/Home/Home";
import Prime from "../layout/Prime";
import ChefRecipe from "../components/ChefRecipe/ChefRecipe";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Prime></Prime>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chefRecipe/:id',
                element: <ChefRecipe></ChefRecipe>,
                loader: ({params}) => fetch(`https://chef-recipes-emranali-15.vercel.app/chefRecipe/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);
export default router;