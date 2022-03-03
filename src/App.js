import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import NavbarMUI from "./Components/Navbar-MUI/NavbarMUI";
import Orders from "./Pages/Orders/Orders";
import Cars from "./Pages/Cars/Cars";
import CarDetails from "./Pages/Cars/CarDetails";
import OrderDetails from "./Pages/Orders/OrderDetails";
function App() {
  return (
    <div className="App">
      <NavbarMUI />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:orderId" element={<OrderDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:carId" element={<CarDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
