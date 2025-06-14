import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./home/home";
import CatTodo from "./pages/cat/cattodo";
import CatCategories from "./pages/cat/catcategories";


export function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cattodo" element={<CatTodo />} />
                <Route path="/catcategories" element={<CatCategories />} />
               
             
            </Routes>
        </BrowserRouter>
    );
}
