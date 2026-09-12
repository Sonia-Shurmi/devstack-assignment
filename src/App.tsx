import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technology from "./components/Technology/Technology";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import type { Technology as TechnologyType } from "./types/types";

const fetchTechnologies = async (): Promise<TechnologyType[]> => {
    const response = await fetch("/data.json");

    return response.json();
};

const technologiesPromise = fetchTechnologies();

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Suspense fallback={<div>Loading technologies...</div>}>
                <Technology technologiesPromise={technologiesPromise}></Technology>
            </Suspense>
            <Footer></Footer>
            <ToastContainer />
        </>
    );
}

export default App;