import { Field, Form } from "formik";
import styled from "styled-components";
import "../../../public/fonts/MessinaSans/stylesheet.css";

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 8px 0 0 8px;

  backdrop-filter: blur(12px);
  background: #1e1e1e;
`;

export const FormSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const FieldStyled = styled(Field)`
  border: 1px solid #1e1e1e;
  border-radius: 0 8px 8px 0;
  padding: 16px 24px;
  width: calc(100% - 48px);

  background-color: inherit;

  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  color: #fff;

  &:focus {
    border-color: white;
    outline: none; /* Убираем стандартную обводку */
  }

  &.error {
    border-color: red;
    color: red;
  }
`;

export const FormBtn = styled.button`
  border-radius: 8px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 12px;
  backdrop-filter: blur(12px);
  background: #dc3b5a;
  border: none;

  transition: color 250ms linear;

  &:hover {
    color: #1e1e1e;
  }

  font-family: "RightGrotesk", sans-serif;
  font-weight: 900;
  font-size: 16px;
  line-height: 119%;
  text-transform: uppercase;
  color: #fff;
`;
