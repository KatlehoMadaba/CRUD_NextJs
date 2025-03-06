"use client";
import { Layout, 
  Card, 
  Input,
   Button, 
  Typography, 
  Divider, 
  Form,
  Tooltip,
  Progress,
  notification } from "antd";
import {  InfoCircleOutlined } from "@ant-design/icons"
import React, { useEffect,useState } from "react";
import { UseUsers } from "../providers/userProvider";
import { IUser } from '../providers/userProvider/context';
const { Content } = Layout;
const { Title } = Typography;

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 6 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 14 },
//   },
// };
const formItemLayout = {
  labelCol: { span: 24 }, // Labels span the full width
  wrapperCol: { span: 24 }, // Input fields span the full width
};

const inputStyle = {
  width: "100%", // Ensures all inputs take up 100% width
  height: "40px", // Standardize input height
};

const SignUpPage = () => {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordFeedback, setPasswordFeedback] = useState("");
  const [confirmPasswordStrength, setConfirmPasswordStrength] = useState(0);
  const [confirmPasswordFeedback, setConfirmPasswordFeedback] = useState("");
  const [isConfirmPasswordTyped, setIsConfirmPasswordTyped] = useState(false); 
  const [isPasswordTyped, setIsPasswordTyped] = useState(false);//user has started typing
  const [password, setPassword] = useState(""); 

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    let feedback = "";

    if (password.length >= 8) strength += 25;
    else feedback = "Password must be at least 8 characters.";

    if (/[A-Z]/.test(password)) strength += 25;
    else feedback = "Add at least one uppercase letter.";

    if (/[a-z]/.test(password)) strength += 25;
    else feedback = "Add at least one lowercase letter.";

    if (/[0-9]/.test(password)) strength += 15;
    else feedback = "Add at least one number.";

    if (/[^A-Za-z0-9]/.test(password)) strength += 10;
    else feedback = "Add at least one special character.";

    setPasswordStrength(strength);
    setPasswordFeedback(strength === 100 ? "Strong Password!" : feedback);
  };
  const checkConfirmPasswordMatch = (confirmPassword: string) => {
    if (!confirmPassword) {
      setConfirmPasswordStrength(0);
      setConfirmPasswordFeedback("");
      return;
    }

    if (confirmPassword === password) {
      setConfirmPasswordStrength(100);
      setConfirmPasswordFeedback("Passwords match!");
    } else {
      setConfirmPasswordStrength(50);
      setConfirmPasswordFeedback("Passwords do not match.");
    }
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!isPasswordTyped) setIsPasswordTyped(true);// starts working as soon as user starts typing
    checkPasswordStrength(newPassword);
  };

  const onConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    if (!isConfirmPasswordTyped) setIsConfirmPasswordTyped(true);
    checkConfirmPasswordMatch(confirmPassword);
  };


  const {
    useUserActionState,
    useUserState,
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    users,
    isError,
    isPending,
    UserCreated
  } = UseUsers();

  const [form] = Form.useForm();
  const variant = Form.useWatch("variant", form);
  
  useEffect(()=>{
    if(UserCreated!=null){
      console.log(UserCreated,"from sign up page");
    }
    else{
      console.log(UserCreated,"users not created!");
    }
  },[UserCreated])
  if (isPending) {
    return <div>creating user users...</div>;
}
if (isError) {
  return <div>Couldnt create your user</div>;
}

  const onFinish = (values: IUser) => {
    if(passwordStrength <100){
      notification.warning({
        message: "Weak Password",
        description: "Please create a stronger password before submitting!",
        placement: "top",
      });
      return;
  }
    if(values.password !==values.confirmpassword){
      notification.error({
        message: "Passwords Mismatch!",
        description: "The passwords entered do not match. Please try again.",
        placement: "top",
      });
      return alert("Passwords dont match !");
    }
    if (createUser) {
      createUser(values);

    }
    console.log(JSON.stringify(values), "from the sign-up page")
    notification.success({
      message: "Sign-Up Successful",
      description: "You have successfully signed up!",
      placement: "top",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f0f2f5",
      }}
    >
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: 400,
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            background: "white",
            textAlign: "center",
          }}
        >
          <Form
            {...formItemLayout}
            form={form}
            variant={variant || "filled"}
            style={{ maxWidth: 600 }}
            initialValues={{ variant: "filled" }}
            onFinish={onFinish}
          >
            <Title level={3}>Get Ready To Sign-Up</Title>
            <Divider />
            <Form.Item
              label="id"
              name="id"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input style={{ width: "100%" }} 
              allowClear />
            </Form.Item>
            <Form.Item
              label="First Name"
              name="name"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input style={{ width: "100%" }} 
              allowClear />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="surname"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input style={{ width: "100%" }} allowClear />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input style={{ width: "100%" }} allowClear />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input
                style={{ width: "100%" }}
                allowClear
                type="email"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              label="password"
              name="password"
              rules={[{ required: true, message: "Please input!" }]}

            >
              <Input.Password
                style={{ width: "100%" }}
                type="password"
                placeholder="password"
                allowClear
                onChange={onPasswordChange}
              />
              </Form.Item>
              {isPasswordTyped &&(
            <>
            <Tooltip
              title="Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and symbols."
            >
            <InfoCircleOutlined style={{ marginBottom: 8 }} /> Password Strength:
            </Tooltip>
          <Progress percent={passwordStrength} 
                    status={passwordStrength < 100 ? "exception" : "success"} />
          <div style={{ color: passwordStrength < 100 ? "red" : "green" }}>{passwordFeedback}</div>
            </>
              )}
            <Form.Item
              label="confirmpassword"
              name="confirmpassword"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Tooltip title="Ensure this matches the password entered above">
              <Input.Password
                style={{ width: "100%" }}
                allowClear
                type="password"
                placeholder="confirmpassword"
                onChange={onConfirmPasswordChange}
              />
              </Tooltip>
            </Form.Item>
            
            {isConfirmPasswordTyped && (
              <>
                <Tooltip title="This bar indicates whether the passwords match.">
                  <InfoCircleOutlined style={{ marginBottom: 8 }} /> Confirm Password Progress:
                </Tooltip>
                <Progress
                  percent={confirmPasswordStrength}
                  status={confirmPasswordStrength < 100 ? "exception" : "success"}
                />
                <div
                  style={{
                    color: confirmPasswordStrength < 100 ? "red" : "green",
                  }}
                >
                  {confirmPasswordFeedback}
                </div>
              </>
            )}
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </div>
  );
};
export default SignUpPage;