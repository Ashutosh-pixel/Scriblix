import React, { useEffect } from "react";
import useStore from "../store/Store";

export default function Categories() {

    const categoryclicked = useStore((state) => state.categoryclicked);
    const setCategoryclicked = useStore((state) => state.setCategoryclicked);

    const clickHandler = () => {
        setCategoryclicked();
    }

    useEffect(()=> {
        console.log('categoryclicked', categoryclicked)
    }, [categoryclicked])

    return <div>
        <button onClick={clickHandler}>button</button>
    </div>;
}
