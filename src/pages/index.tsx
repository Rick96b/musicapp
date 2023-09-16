import { useAuthUser, userModel } from "entities/user";
import { lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./home").then((module) => ({ default: module.HomePage })));
const AuthorizationPage = lazy(() => import("./authorization").then((module) => ({ default: module.AuthorizationPage })));


export const Routing = () => {
    const [activeUser, loading] = useAuthUser();

    const dispatch = useDispatch()

    if(loading) return <></>
    if(activeUser) dispatch(userModel.setActiveUser(activeUser))

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