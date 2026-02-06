import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { roles } from "../data/roles.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Roles() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (id) => {
    if (id) {
      navigate(`/questions/${id}`);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />

      <div className="roleslist" defaultValue="">
        <button onClick={handleClick}>Get Started</button>
        {isOpen && (
          <div>
            {roles.map((role) => (
              <button key={role.id} onClick={()=>handleChange(role.id)}>
                {role.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
