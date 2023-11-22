import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListAppointmentComponent from "./components/ListAppointmentComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateAppointmentComponent from "./components/CreateAppointmentComponent";
function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<ListAppointmentComponent />} />
              <Route path="/appointments" exact element={<ListAppointmentComponent />} />
              <Route path="/add-appointment" exact element={<CreateAppointmentComponent />} />
            </Routes>
          </div>
          <FooterComponent />
       
      </Router>
    </div>
  );
}

export default App;
