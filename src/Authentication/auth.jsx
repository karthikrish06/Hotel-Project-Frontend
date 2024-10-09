// api integration

import { baseurl, userurl } from "../../backend";



async function loginHandler(payload) {
    const res = await fetch(`${baseurl}/${userurl}/login`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    return data;
}

async function signupHandler(payload) {
    const res = await fetch(`${baseurl}/${userurl}/register`, {
        method: "GET",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    return data;
}

function isAccessed() {
    if (localStorage.getItem("token")) {
        return true;
    } else {
        return false;
    }
}

function isAdmin() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user.isAdmin) {
        return true;
    } else {
        return false;
    }
}

function logoutHandler() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

function getToken(){
    return localStorage.getItem("token");
}
export { loginHandler, signupHandler, isAccessed, isAdmin, logoutHandler,getToken };