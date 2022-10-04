import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Login} from "./Login/Login";
import {Registration} from "./Registration/Registration";
import {RecoverPassword} from "./PasswordRecover/RecoverPassword";
import {NewPassword} from "./PasswordRecover/NewPassword/NewPassword";
import {TestsPage} from "./TestsPage/TestsPage";

export const Pages = () => {
    return <div>
        Pages:
        <Routes>
            <Route path={"/"} element={<Profile/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/registration"} element={<Registration/>}/>
            <Route path={"/newPassword"} element={<NewPassword/>}/>
            <Route path={"/recoverPassword"} element={<RecoverPassword/>}/>
            <Route path={"/testsPage"} element={<TestsPage/>}/>
            <Route path={"404"} element={<h1 style={{textAlign: "center"}}>404: PAGE NOT FOUND</h1>}/>
            <Route path={"*"} element={<Navigate to={"404"}/>}/>
        </Routes>
    </div>
}