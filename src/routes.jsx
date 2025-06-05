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
                <Route path="/categories" element={<Categories />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/cattodo" element={<CatTodo />} />
                <Route path="/catcategories" element={<CatCategories />} />
                <Route path="/rtccategories" element={<Rtccategories/>}></Route>
                <Route path="/rtctodo" element={<Rtqtodo/>}></Route>
                <Route path="/rtctodo/:id" element={<InfoById/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
