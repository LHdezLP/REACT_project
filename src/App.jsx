import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home.jsx";
import Tickets from "./pages/tickets-camping/Tickets.jsx";
import Camping from "./pages/camping/Camping.jsx";
import RSSFeedPage from "./pages/rss/RSS.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/camping" element={<Camping />} />
        <Route path="/rss" element={<RSSFeedPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
