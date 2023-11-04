import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home.component";
function Shop() {
  return (
    <>
      <div>
        <h1>I am a shop component</h1>;
      </div>
    </>
  );
}
function Navigation() {
  return (
    <div>
      <h1>I am the navigation component</h1>
      <Outlet />
    </div>
  );
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}
