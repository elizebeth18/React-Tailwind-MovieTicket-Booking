import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const RootLayout = () => {
    
    useEffect(() => {

        console.log(
            "Root mounted"
        );

        return () => {
            console.log(
                "Root unmounted"
            );
        };

    }, []);

    return(
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default RootLayout;