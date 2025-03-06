
import { Layout, Card, Input, Button, Typography, Divider,Form} from 'antd';
import React from 'react';
import { UseUsers } from '../../providers/userProvider/index';
import { useEffect} from 'react';
import {IUser} from '../../providers/userProvider/context';
const { Content } = Layout;
const { Title} = Typography;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const SignUpPage = () => {
  const {useUserActionState,useUserState,getUsers,createUser,deleteUser,updateUser}=UseUsers();
  useEffect(()=>{
    getUsers();
  },[])
    const onFinished=(values:IUser)=>{
    console.log(values,"from the sign-up page");
    if(createUser){
      createUser(values)
    }
}
//   useEffect(()=>{
//     if(UserCreated!=null){
//       console.log(UserCreated,"from sign up page");
//     }
//   },[UserCreated])
 // }  
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f0f2f5'
      }}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{  width: 400,
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            background: 'white',
            textAlign: 'center', }}>
      <Form
      {...formItemLayout}
      form={form}
      variant={variant || 'filled'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
      onFinish={onFinished}
    >
      <Title level={3}>Get Ready To Sign-Up</Title>
      <Divider></Divider>
      <Form.Item
        label="Firstname"
        name="Firstname"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input style={{ width: '100%' }}  allowClear />
      </Form.Item>

      <Form.Item
        label="Lastname"
        name="Lastname"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input style={{ width: '100%' }} allowClear />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[{ required: true, message: 'Please input!' ,type:'email'}]}
        
      >
        <Input
        allowClear/>
      </Form.Item>
      <Form.Item
        label="Username"
        name="CreatedUsername"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input
        allowClear />
      </Form.Item>

      <Form.Item
        label="Password"
        name="CreatePassword"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input  type="password" placeholder="Password" allowClear />
      </Form.Item>

      <Form.Item
        label="Password"
        name="ConfirmPassword"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input  type="password" placeholder="Confrim password" allowClear  />
      </Form.Item>

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
