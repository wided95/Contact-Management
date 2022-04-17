import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Button,Select} from 'antd';
import {PlusCircleOutlined } from '@ant-design/icons';
import {LockOutlined,MailFilled,UserOutlined,PhoneFilled } from '@ant-design/icons';
import { addcontact} from "../js/contactSlice";
import { Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
const Addcontact = ({ ping, setping }) => {
    const dispatch = useDispatch();
  const [Contact, setContact] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Status: "",
    Address: "",
  });
  const [show, setshow] = useState(false);
  const { Option } = Select;
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  const handleClick = () => {
    if (isAuth) {
      dispatch(addcontact(Contact));
          setping(!ping);
          setshow(!show);
    } else {
      navigate("/login");
    }
  };
  return (
    <div className=''>
        <Button type="primary" style={{ background: "#002766", borderColor: "#002766",marginTop:"7px"  }} htmlType="submit" className="login-form-button" onClick={() => setshow(!show)}>
        <PlusCircleOutlined />  
        New
        </Button>
        {show ? ( <div className='add-element'>
          <Form className="form-element"
      wrapperCol={{
        span:40,
      }}
      layout="horizontal"
    >
     <Form.Item
        name="FirstName "
        rules={[
          {
            required: true,
            message: 'Please input your FirstName!',
          },
        ]}
        onChange={(e) => setContact({ ...Contact, FirstName: e.target.value })}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="FirstName" />
      </Form.Item>
      <Form.Item
        name="LastName "
        rules={[
          {
            required: true,
            message: 'Please input your LasttName!',
          },
        ]}
        onChange={(e) => setContact({ ...Contact, LastName: e.target.value })}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="LastName" />
      </Form.Item>
      <Form.Item
        name="Email "
        rules={[
          {
            required: true,
            message: 'Please input your Email Address!',
          },
        ]}
        onChange={(e) => setContact({ ...Contact, Email: e.target.value })}
      >
        <Input prefix={<MailFilled  className="site-form-item-icon" />}placeholder="Email"/>
      </Form.Item>
      <Form.Item
        name="PhoneNumber "
        rules={[
          {
            required: true,
            message: 'Please input your PhoneNumber!',
          },
        ]}
        onChange={(e) => setContact({ ...Contact, PhoneNumber: e.target.value })}
      >
        <Input prefix={<PhoneFilled />} placeholder="PhoneNumber" />
      </Form.Item>
      <Form.Item
        name="Status "
        rules={[
          {
            required: true,
            message: 'Please input your Status!',
          },
        ]}>
        <Select name="status"
              onChange={(value) => {
                setContact({...Contact, Status: value });
              }}
              placeholder="Please choose the status" >
          <Option value="Active">Active</Option>
          <Option value="Inactive">Inactive</Option>
        </Select>
        </Form.Item>
      <Form.Item
        name="Address "
        rules={[
          {
            required: true,
            message: 'Please input your Address!',
          },
        ]}
        onChange={(e) => setContact({ ...Contact, Address: e.target.value })}
      >
        <Input  placeholder="Address" />
      </Form.Item>
      <Form.Item
        onClick={handleClick}
          // dispatch(addcontact(Contact));
          // setping(!ping);
          // setshow(!show);
      >
        <Button  type="primary" style={{ background: "#002766", borderColor: "#002766"  }} htmlType="submit"block >
          Create Contact
        </Button>
      </Form.Item>
    </Form>
        </div>) : null}

    </div>
  )
}

export default Addcontact