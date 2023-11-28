import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Container,
} from "reactstrap";
import "./styles.css";
import loginImage from "../../assets/login_image.png"

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateLogin = () => {
    if (login.trim() === "") {
      setLoginError("Contraseña es nesesaria");
    } else {
      setLoginError("");
    }
  };

  const validateEmail = () => {
    // A simple email validation regex, you can use a more robust one as needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setEmailError("Email es nesesario");
    } else if (!emailRegex.test(email)) {
      setEmailError("Formato invalido de email");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform additional actions here, such as making an API call for authentication

    // For demonstration purposes, let's log the login and email values
    console.log("Password:", login);
    console.log("Email:", email);
  };

  return (
    <>
      <Container>
        
        <div className="desktop_flex">
        <div>
        <section className="flex_login">
          <h1 className="tittle">Bienvienido!</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="form_input">
              <Label for="email" className="form_login">
                Email
              </Label>
              <Input
                className="form_login"
                type="email"
                name="email"
                id="email"
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                invalid={emailError !== ""}
                style={{
                  borderColor: loginError !== "#E91E63" ? "#E91E63" : "#E91E63",
                  outline: "none",
                  borderRadius: "12px",
                  height: "24px",
                }}
              />
              <FormFeedback>{emailError}</FormFeedback>
            </FormGroup>

            <FormGroup className="form_input">
              <Label for="password" className="form_login">
                Password
              </Label>
              <Input
                className="form_login"
                type="password"
                name="login"
                id="login"
                placeholder="Ingresa tu contraseña"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                onBlur={validateLogin}
                invalid={loginError !== ""}
                style={{
                  borderColor: loginError !== "#E91E63" ? "#E91E63" : "#E91E63",
                  outline: "none",
                  borderRadius: "12px",
                  height: "24px",
                }}
              />
              <FormFeedback>{loginError}</FormFeedback>
            </FormGroup>
          </Form>
        </section>

        <div className="flex_submit_button">
          <p className="form_text_registrate">
            No tienes cuenta?  <span>Registrate</span>
          </p>
          <button className="submit_button">Iniciar sesión</button>
        </div>
        </div>

        <img src={loginImage} alt="Imagen de artesano trabajando" className="login_image" />

        </div>
        
      </Container>
    </>
  );
};

export default LoginForm;
