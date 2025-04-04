import React, { useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";

type FormData = {
   login: string;
   password: string;
};

export const Login = () => {
   const [formData, setFormData] = useState<FormData>({ login: "", password: "" });

   const location = useLocation();
   const navigate = useNavigate();

   const from = location.state?.from?.pathname || "/";

   const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Submitted Data:", formData);
   };

   const handleClick = () => {
      console.log("Greet Gob!")
      // Здесь логика авторизации (например, setAuth(true))
      navigate(from, { replace: true }); // После успешного входа возвращаемся назад
   }

   return (
      <LoginWrapper>
         <Form onSubmit={handleSubmit}>
            <Input
               type="text"
               name="login"
               placeholder="Логин"
               value={formData.login}
               onChange={handleChange}
            />
            <Input
               type="password"
               name="password"
               placeholder="Пароль"
               value={formData.password}
               onChange={handleChange}
            />
            <Button type="submit" onClick={handleClick}>Войти</Button>
         </Form>
      </LoginWrapper>
   );
};

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  //height: 100vh;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;