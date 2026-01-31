import { createBrowserRouter } from "react-router-dom";
import FunctionPage from '../Pages/FunctionPage'
import Notifications from '../Pages/Notifications'

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<FunctionPage/>
    },
    {
        path:"/notification",
        element:<Notifications/>
    }
])

export default Routes;