import Homepage from "../pages/Homepage"
import AatroxPage from "../pages/AatroxPage"

import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import PageNotFound from "../pages/PageNotFound"



function AppRoutes(props){

    return(
        <Routes>
            <Route index element={<Homepage{...props}/>}/>
            <Route path="/aatrox" element={<AatroxPage{...props}/>} />
            <Route path="login" element={<LoginPage{...props}/>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}



export default AppRoutes