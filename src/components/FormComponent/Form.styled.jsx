import { Field, Form } from "formik";
import styled from "styled-components";

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

  @media screen and (min-width: 1280px) {
    padding: 20px;
  }
`;

export const FormSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const FieldStyled = styled(Field)`
  border: 1px solid ${(props) => (props.error ? "red" : "#1e1e1e")};
  border-radius: 0 8px 8px 0;
  padding: 16px 24px;
  width: calc(100% - 48px);

  background-color: inherit;

  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  line-height: 117%;
  color: #fff;

  &:focus {
    border-color: white;
    outline: none;
  }

  &.error {
    border-color: #dc3b5a;
    color: #dc3b5a;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 119%;
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

  font-size: 16px;
  line-height: 119%;
  color: #fff;

  &:hover {
    color: #1e1e1e;
  }
  @media screen and (min-width: 768px) {
    max-width: 248px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    max-width: 397px;

    font-size: 28px;
    line-height: 121%;
  }
`;

export const CustomErrorMessage = styled.p`
  position: absolute;
  bottom: -15px;
  right: 0;

  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
  text-align: right;
  color: #dc3b5a;

  @media screen and (min-width: 1280px) {
    bottom: -18px;

    line-height: 117%;
  }
`;

export const ErrorWrapper = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 200px;
  }

  @media screen and (min-width: 1280px) {
    width: 333px;
  }
`;
