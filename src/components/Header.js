import React,{useState} from "react";
import logo from "../images/google-keep.png";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";


const Header = () => {
    const [state, setState] = useState(false);
    const toggle = () =>{
        setState(!state)
    }
  return (
    <>
      <div className="header">
        <img src={logo} alt="Logo" width="50" height="50" />
        <h1>Google Keep</h1>
        {
            state
            ? 
            <LightModeIcon className="toggler" onClick={toggle} fontSize="large" />
            :
            <BedtimeIcon className="toggler" onClick={toggle} fontSize="large" />
        }
       
      </div>
    </>
  );
};

export default Header;
