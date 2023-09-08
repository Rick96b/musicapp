import { useAuthUser } from "entities/user";
import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./home").then((module) => ({ default: module.HomePage })));
const SignUpPage = lazy(() => import("./sign-up").then((module) => ({ default: module.SignUpPage })));


export const Routing = () => {
    const [activeUser, loading] = useAuthUser();

    console.log(loading)
    if(loading) return <></>


    return (
        <>
            { 
                activeUser 
                ?
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                :
                <Routes>
                    <Route path='/' element={<SignUpPage />} />
                </Routes>
            }   
        </>   
    );
};