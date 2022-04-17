import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../js/userSlice";
import {Button} from 'antd';
import 'antd/dist/antd.css';
const Navbar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const nav = document.querySelector(".navbar");
      if (window.pageYOffset > 0) {
        nav.classList.add("add-shadow");
      } else {
        nav.classList.remove("add-shadow");
      }
    });
  }, []);
  return (
    <div className="navbar">
      <ul>
        <li>
        <Link to="/"><h2 className="logo-text">Contact Manegement</h2></Link>
        </li>
        <li>
        </li>
        {!isAuth ? (
          <li>
            <Link to="/Login"><Button  type="primary" style={{ background: "#002766", borderColor: "#104799",borderRadius:"5px",marginTop:"-5px"  }} htmlType="submit" 
            >
          Login
        </Button></Link>
          </li>
        ) : (
          <li
            className="logout"
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
           <Button  type="primary" style={{ background: "#002766", color:"white", borderColor: "#104799",borderRadius:"5px",marginTop:"-5px",marginRight:"70px"  }} htmlType="submit" 
            >
          Logout
        </Button> 
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
