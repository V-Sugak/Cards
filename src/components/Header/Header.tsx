import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

export const Header = () => {
    return <div>
        <nav className={s.nav}>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/registration"}>Registration</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/recoverPassword"}>Recover password</NavLink>
            <NavLink to={"/newPassword"}>New password</NavLink>
            <NavLink to={"/testsPage"}>Page of tests</NavLink>
        </nav>
        <hr/>
    </div>
}