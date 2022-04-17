import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Addcontact from "../components/Addcontact";
import Allcontacts from "../components/Allcontacts";

const Home = ({ ping, setping }) => {
  
  return (
    <div className="home-element">
      <div className='grouped-element'>
      <h1>Contact&nbsp;</h1>
      <Addcontact ping={ping} setping={setping}/>
      </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laboriosam molestias incidunt dolorum at nobis non, ipsa labore commodi delectus fugiat sint aliquam, distinctio officiis ad praesentium quos! Voluptas, aut.</p>
    <Allcontacts ping={ping} setping={setping}/>
    </div>

  );
};

export default Home;
