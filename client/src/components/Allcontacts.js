import React, { useState } from "react";
import { Card, Avatar } from "antd";
import { UserOutlined, DeleteFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import Updatecontact from "./Updatecontact";
import { Button} from "antd";
import { deletecontact } from "../js/contactSlice";
import { Input, Space } from 'antd';
import Search from "./Search";
import { useNavigate } from "react-router-dom";
const Allcontacts = ({ id, ping, setping }) => {
  const contacts = useSelector((state) => state.contact.contacts);
  const dispatch = useDispatch();
  const [text, settext] = useState("");
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  
  return (
    <div>
        <Search settext={settext}/>
      <div className="All-contacts">
      
        {contacts?.filter((el) =>
                    el.FirstName.toLowerCase().includes(text.toLowerCase())
                  ).map((el) => (
          <Card style={{ width: 250 }} >
            <div className="align-card">
                    <Avatar shape="square" size="small" icon={<UserOutlined />} />

              <div>
              <div className="div-content">
                <h4>FirstName:</h4>
                <p>{el.FirstName}</p>
              </div>
            <div className="div-content">
              <h4>LastName:</h4>
              <p>{el.LastName}</p>
            </div>
            <div className="div-content">
              <h4>Email:</h4>
              <p>{el.Email}</p>
            </div>
            <div className="div-content">
              <h4>PhoneNumber:</h4>
              <p>{el.PhoneNumber}</p>
            </div>
            <div className="div-content">
              <h4>Status:</h4>
              <p>{el.Status}</p>
            </div>
            <div className="div-content">
              <h4>Address:</h4>
              <p>{el.Address}</p>
            </div>
            </div>
            </div>
            <div className="button-content">
            <Updatecontact ping={ping}
                            setping={setping}
                            id={el._id}/>
                            <Button type="primary" danger onClick={() => {if(isAuth){
                                dispatch(deletecontact(el._id));
                                setping(!ping);}else{
                                  navigate("/login");
                                }
                              }}><DeleteFilled /></Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Allcontacts;
