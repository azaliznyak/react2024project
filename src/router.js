import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GenresPage, MoviesByGenresPage, MoviesInfoPage, MoviesPage} from "./pages";
import {SearchPage} from "./pages/SearchPage";



const router=createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element: <Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>
            },
            {
                path:'movie/:id', element:<MoviesInfoPage/>
            },
            {
                path:'/genres', element:<GenresPage/>, children:[
                    {
                        path:'/genres/:id', element:<MoviesByGenresPage/>
                    }
                ],

            },
            {
                path:'search', element:<SearchPage/>
            }
        ]
    }
])

export {
    router
}