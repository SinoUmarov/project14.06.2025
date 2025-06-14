import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./home/home";
import Categories from "./pages/classic/categories";
import Todo from "./pages/classic/todo";
import CatTodo from "./pages/cat/cattodo";
import CatCategories from "./pages/cat/catcategories";
import Rtccategories from "./pages/rtc/rtccategories";
import Rtqtodo from "./pages/rtc/rtctodo";
import InfoById from "./pages/info-by-id/info-by-id";

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
