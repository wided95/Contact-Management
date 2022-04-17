import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../js/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import 'antd/dist/antd.css';
import { Form, Input, Button,Space,Slider} from 'antd';
import {LockOutlined,MailFilled } from '@ant-design/icons';
const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  
  return (
    <div  className="login-form">
      <h1>Log in</h1>
      <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 10,
      }}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
     
    >
      <Form.Item
        name="Email Address"
        rules={[
          {
            required: true,
            message: 'Please input your Email Address!',
          },
        ]}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      >
        <Input prefix={<MailFilled  className="site-form-item-icon" />} placeholder="Username"   />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
          
        ]}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item wrapperCol={{
          offset: 0,
          span: 10,
        }}>
        <Button type="primary" style={{ background: "#002766", borderColor: "#002766"  }} htmlType="submit" className="login-form-button" block onClick={() => {
            dispatch(login(user));
            setTimeout(() => {
              navigate("/home");
            }, 2000);
          }}>
          Log in
        </Button>
        <br/>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
      {/* <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      
    >
      <Form.Item
        label="Email"
        name="Email "
        rules={[
          {
            required: true,
            message: 'Please input your Email Address!',
          },
        ]}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 7,
          span: 16,
        }}
      >
        
        
        <Button type="primary" htmlType="submit" onClick={() => {
            dispatch(login(user));
            setTimeout(() => {
              navigate("/profile");
            }, 2000);
          }}>
          SIGN IN
        </Button>
        
      </Form.Item>
      
      <Link to="/register"><p>No account? Create one here</p></Link>
      </Form> */}
      <ToastContainer />
      
    </div>
  );
};

export default Login;
