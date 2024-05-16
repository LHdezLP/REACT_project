import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home.jsx";
import Tickets from "./pages/tickets-camping/Tickets.jsx";
import Camping from "./pages/camping/Camping.jsx";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="*" element={<Home/>}></Route>
      <Route path="/tickets" element={<Tickets/>}></Route>
      <Route path="/camping" element={<Camping/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
