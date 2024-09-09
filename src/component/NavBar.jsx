import React from "react";

export default function NavBar() {
    return <div className="navbarcontainer flex w-4/5 justify-center">
        <div className="navbar w-full flex justify-between">
            <div className="navicons w-full flex justify-center">
                <span>Notes</span>
                <span>TODO</span>
                <span>Rest</span>
            </div>
            <div>
                Settings
            </div>
        </div>
    </div>
}