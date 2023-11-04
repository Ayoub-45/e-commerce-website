import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home.component";
export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />;
    </Routes>
  );
}
