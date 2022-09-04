import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import MainPage from "./Components/MainPage";
import {Doctors} from "./Components/Doctors";
import Reviews from "./Components/Reviews";
import Treatments from "./Components/Treatments";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NavBar />}>
          <Route index element={<MainPage />} />
          <Route path="doctors/:index" element={<Doctors />} />
          <Route path="treatments/:index" element={<Treatments />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
