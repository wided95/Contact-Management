import React, { useState } from "react";
import { Button, Modal, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import {
  LockOutlined,
  MailFilled,
  UserOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import { updatecontact } from "../js/contactSlice";
const Updatecontact = ({ id, ping, setping }) => {
  const [contact, setcontact] = useState({});
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const contacts = useSelector((state) => state.contact.contacts);
  const { Option } = Select;
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  const handleClick = () => {
    if (isAuth) {
      dispatch(updatecontact({ id: id, contact }));
      setping(!ping);
      setshow(!show);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <Button
        type="primary"
        style={{ background: "#002766", borderColor: "#002766" }}
        htmlType="submit"
        onClick={() => setshow(!show)}
      >
        <EditOutlined />
      </Button>
      {show ? (
        <div className="modale-Element">
          <div className="form-element">
          <Input placeholder="FirstName..." onChange={(e) =>
                setcontact({ ...contact, FirstName: e.target.value })
              } prefix={<UserOutlined className="site-form-item-icon" />}
               className="input-element" style={{marginTop:"20px"}}/>

              <Input  onChange={(e) =>
                setcontact({ ...contact, LastName: e.target.value })
              }prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="LastName..." className="input-element" />
            
            <Input  onChange={(e) =>
                setcontact({ ...contact, Email: e.target.value })
              } prefix={<MailFilled className="site-form-item-icon" />}
              placeholder="Email..." className="input-element" />
            
            <Input placeholder="PhoneNumber..." className="input-element" onChange={(e) =>
                setcontact({ ...contact, PhoneNumber: e.target.value })
              } prefix={<PhoneFilled />}  />
            <Input placeholder="Choose status Active/Inactive..."  className="input-element" onChange={(e) =>
                setcontact({ ...contact, Status: e.target.value })
              } 
              />
              <Input placeholder="Address..."  className="input-element" onChange={(e) =>
                setcontact({ ...contact, Address: e.target.value })
              } 
              />
                <Button
                  type="primary"
                  style={{ background: "#002766", borderColor: "#002766"}}
                  htmlType="submit" block onClick={handleClick}
                    // dispatch(updatecontact({ id: id, contact }));
                    // setping(!ping);
                    // setshow(!show);
                  
                >
                  Update Contact
                </Button>
              
            
            </div>
        </div>
      ) : null}
    </div>
  );
};

export default Updatecontact;
