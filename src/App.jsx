import HomePage from "./pages/HomePage"
import Projects from "./pages/Projects"
import Blog from "./pages/Blog"
import Resume from './pages/Resume'
import Contact from "./pages/Contact";

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<HomePage />),
    },
    {
        path: "/resume",
        element: (<Resume />),
    },
    {
        path: "/projects",
        element: (<Projects />),
    },
    {
        path: "/blog",
        element: (<Blog />),
    },
    {
        path: "/contact",
        element: (<Contact />),
    },
]);

function App() {
    return (
        <div className=''>
            <RouterProvider router={router} />
        </div>
    )
}

export default App