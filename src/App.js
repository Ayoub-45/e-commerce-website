import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home.component";
function Shop(){
  return <h1>I am a shop component</h1>
}
export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} >
       <Route path="/home/shop" element={<Shop />}/>
        </Route>;
    </Routes>
  );
}
