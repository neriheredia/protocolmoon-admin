import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UsersList from "./pages/usersList/UsersList";
import PostsList from "./pages/postsList/PostsList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./theme/dark.scss";
import OrdersList from "./pages/ordersList/OrdersList";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<UsersList />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New title="Add New User" />} />
            </Route>
            <Route path="products">
              <Route index element={<PostsList />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New title="Add New Product" />} />
            </Route>
            <Route path="orders">
              <Route index element={<OrdersList />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New title="Add New Product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
