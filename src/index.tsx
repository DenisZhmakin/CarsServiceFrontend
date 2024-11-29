import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.tsx";
import CarListPage from "./pages/CarListPage/CarListPage.tsx";
import CarStatusesPage from "./pages/CarStatusesPage/CarStatusesPage.tsx";
import CarTypesPage from "./pages/CarTypesPage/CarTypesPage.tsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.min.js';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path: "/car_list",
            element: <CarListPage />
        },
        {
            path: "/car_statuses",
            element: <CarStatusesPage />
        },
        {
            path: "/car_types",
            element: <CarTypesPage />
        }
    ]
)


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
