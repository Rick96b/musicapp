import { useAuthUser } from "entities/user";
import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./home").then((module) => ({ default: module.HomePage })));
const AuthorizationPage = lazy(() => import("./authorization").then((module) => ({ default: module.AuthorizationPage })));


export const Routing = () => {
    const [activeUser, loading] = useAuthUser();

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
                    <Route path='/' element={<AuthorizationPage />} />
                </Routes>
            }   
        </>   
    );
};