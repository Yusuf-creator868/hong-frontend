import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout";
import Pages from "./Pages";

const router = createBrowserRouter([
    {path: '/', element: (
        <MainLayout/>
    ),
    children: [
        {index: true, element: <Pages/>},
    ]
}
])

export default function RouterSetup() {
    return <RouterProvider router={router} />
}