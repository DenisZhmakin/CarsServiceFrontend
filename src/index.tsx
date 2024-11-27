import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage/>
        }
    ]
)


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
