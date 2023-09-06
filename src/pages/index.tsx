import { userSelectors } from "entities/user";
import { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./home").then((module) => ({ default: module.HomePage })));
const SignUpPage = lazy(() => import("./sign-up").then((module) => ({ default: module.SignUpPage })));


export const Routing = () => {
    const user = useSelector(userSelectors.getActiveUser);
    return (
        <>
            { 
                user 
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