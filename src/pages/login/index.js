import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { CForm, CButton, CImg, CDiv, CFormText } from './styled'
import logoLogin from '../../img/logoLogin.png'
import history from '../../components/history';

function Login() {

  const [mail, setMail] = useState()
  const [password, setPassword] = useState()
  const [alert, setAlert] = useState('')

  async function mailChange(event) {
    setMail({ value: event.target.value });

  }

  async function passwordChange(event) {
    setPassword({ value: event.target.value });

  }
  async function auth() {

    if (mail && password && password.value.length >= 6) {
      history.push(`/home`)
    }
    else {
      setAlert('email ou senha incorretos')

    }
  }




  return (

    <CDiv>
      <CImg src={logoLogin} />
      <CForm>
        <CFormText className="text-muted">
          Sign-In
    </CFormText>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email (phone for mobile accounts)</Form.Label>
          <Form.Control onChange={mailChange} type="email" placeholder="Enter email" />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control onChange={passwordChange} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text variant="success">
          {alert}
        </Form.Text>
        <CButton variant="primary" onClick={() => auth()}>
          Sign-In
  </CButton>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Text className="text-muted">
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
    </Form.Text>
        </Form.Group>
      </CForm>
    </CDiv>
  );
};

export default Login;