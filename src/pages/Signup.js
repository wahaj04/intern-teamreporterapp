import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/config";
import { useState } from "react";
import '../styles/formStyle.css'
import { Layout } from 'antd';
import { Form, Input, Button } from 'antd';
const { Header } = Layout;

const Signup = () => {
  const navigate = useNavigate()
  const [useremail, setUserEmail] = useState('');
  //const [username, setUserName] = useState('');
  const [userpass, setUserPass] = useState('');

  const signupHandler = async() => {
    try{
    const createUser = await createUserWithEmailAndPassword(auth, useremail,userpass);
    if(createUser)
    {
      navigate('../login')

    }
    console.log(createUser)
  }
  catch(error)
  {
    console.log(error.message)
  }
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
          <Input  onChange={(e) => {setUserEmail(e.target.value)}}/>
        </Form.Item>

       

        <Form.Item
          label="Password"
          name="userpass"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password onChange={(e) => {setUserPass(e.target.value)}}/>
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