import React from "react";
import useStore from "../store/Store";
import { NavLink } from "react-router-dom";

export default function Categories() {

    const folderArray = useStore((state) => state.folderArray);

    return <div className="foldercategory flex w-full">
        {folderArray.map((item, index) => {
            return <div key={index}>{item}</div>
        })}
        <NavLink to={'/folderpage'}>button</NavLink>
    </div>;
}
