import { useNavigate } from "react-router-dom";
import '../styles/formStyle.css'
import { Layout } from 'antd';
import { Form, Input, Button } from 'antd';
const { Header } = Layout;

const Signup = () => {
    const navigate = useNavigate()
    const signupHandler = () => {  
      navigate('../login')
      }


  return (

    <div>
      <Header>
        <h1 >SIGNUP FORM</h1>
      </Header>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}

      >

        <Form.Item

          label="Useremail"
          name="useremail"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item

          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
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
        >
          <Input.Password />
        </Form.Item>


        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button onClick = {signupHandler} type="primary" htmlType="submit">
            Signup Now
          </Button>
        </Form.Item>
      </Form>
    </div>

  )
}
export default Signup;