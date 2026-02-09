import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
<<<<<<< HEAD
import './index.css';
=======
import "./index.css";

>>>>>>> style/homepage

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)