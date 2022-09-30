import React from "react";
import {Navigate, Route, Routes } from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Login} from "./Login/Login";
import {Registration} from "./Registration/Registration";

export const Pages = () => {
    return <div>
        Pages:
        <Routes>
            {/*<Route path={"/"} element={<TodoLists/>}/>
            <Route path={"login"} element={<Login/>}/>
            <Route path={"404"} element={<h1 style={{textAlign: "center"}}>404: PAGE NOT FOUND</h1>}/>
            <Route path={"*"} element={<Navigate to={"404"}/>}/>*/}
            <Route path={"/"} element={<Profile/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/registration"} element={<Registration/>}/>
            <Route path={"404"} element={<h1 style={{textAlign: "center"}}>404: PAGE NOT FOUND</h1>}/>
            <Route path={"*"} element={<Navigate to={"404"}/>}/>
        </Routes>
    </div>
}