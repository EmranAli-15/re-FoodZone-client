import { createBrowserRouter, } from "react-router-dom";
import Home from "../components/Home/Home";
import Prime from "../layout/Prime";
import ChefRecipe from "../components/ChefRecipe/ChefRecipe";

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
                path: '/chefRecipe',
                element: <ChefRecipe></ChefRecipe>
            }
        ]
    },
]);
export default router;