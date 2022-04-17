import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../js/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { LockOutlined, MailFilled, UserOutlined } from "@ant-design/icons";
import { Alert } from "antd";

const Registre = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [User, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="register-bloc">
      <h1>Create an account</h1>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 10,
        }}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="UserName"
          name="UserName "
          rules={[
            {
              required: true,
              message: "Please input your UserName!",
            },
          ]}
          onChange={(e) => setUser({ ...User, name: e.target.value })}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email "
          rules={[
            {
              required: true,
              message: "Please input your Email Address!",
            },
          ]}
          onChange={(e) => setUser({ ...User, email: e.target.value })}
        >
          <Input prefix={<MailFilled className="site-form-item-icon" />} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          onChange={(e) => setUser({ ...User, password: e.target.value })}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 10,
          }}
        >
          <Button
            type="primary"
            style={{ background: "#002766", borderColor: "#002766" }}
            htmlType="submit"
            onClick={() => {
              dispatch(register(User));
              navigate("/login");
              toast("user added successfuly!");
              <Alert message="User added successfuly" type="success" />;
            }}
            block
          >
            SIGN UP
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer />
      <ToastContainer />
    </div>
  );
};

export default Registre;
