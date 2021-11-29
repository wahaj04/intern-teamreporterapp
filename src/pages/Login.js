import { useNavigate } from "react-router-dom";
import '../styles/formStyle.css'
import { Layout } from 'antd';
import { Form, Input, Button} from 'antd';

const { Header} = Layout;


const Login = ()=>{
  const navigate = useNavigate()
  const loginHandler = () => {  
    navigate('../home')
    }

return(
  <div>
    <Header>
      <h1 >LOGIN FORM</h1>
    </Header>

  <Form
  name="normal_login"
  className="login-form"
  initialValues={{
    remember: true,
  }}
  
>      <Form.Item
        
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
        <Button onClick={loginHandler} type="primary" htmlType="submit">
         Login
        </Button>
      </Form.Item>
    </Form>
    </div>

)
}
export default Login;