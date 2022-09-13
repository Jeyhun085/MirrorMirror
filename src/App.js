import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./Components/MainPage";
import { Doctors } from "./Components/Doctors";
import Reviews from "./Components/Reviews";
import PriceList from "./Components/PriceList";
import Treatments from "./Components/Treatments";
import NavBar from "./Components/NavBar";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function App() {
  return (
    <div>
      <Fab
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          height: 75,
          width: 75,
          backgroundColor: "inherit"
        }}
        href="https://wa.me/79259258631"
      ><WhatsAppIcon fontSize="large" sx={{stroke:"white"}}/></Fab>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NavBar />}>
            <Route index element={<MainPage />} />
            <Route path="doctors/:index" element={<Doctors />} />
            <Route path="treatments/:index" element={<Treatments />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="pricelist" element={<PriceList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
