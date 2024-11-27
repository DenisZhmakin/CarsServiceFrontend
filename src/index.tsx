import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.tsx";
import addNewCarType from "./api/addNewCarType.ts";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage/>
        }
    ]
)

addNewCarType({value: "Личный автомобиль"}).then(res => console.log(res));

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
