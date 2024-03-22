import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FieldStyled,
  FormBtn,
  FormIconWrapper,
  FormStyled,
  FormSvg,
  FormWrapper,
} from "./Form.styled";
import Icons from "../../img/svg/icons.svg";

export const FormComponent = () => {
  return (
    <Formik
      initialValues={{ discord: "", wallet: "" }}
      validationSchema={Yup.object({
        discord: Yup.string()
          .matches(/^@[A-Za-z]+$/, "WRONG DISCORD")
          .required("REQUIRED"),
        wallet: Yup.string()
          .matches(/^[a-zA-Z0-9]+$/, "WRONG ADDRESS")
          .required("REQUIRED"),
      })}
      onSubmit={(values) => {
        console.log("Form submitted:", values);
      }}
    >
      <FormStyled>
        <FormWrapper>
          <label htmlFor="discord"></label>
          <FormIconWrapper>
            <FormSvg>
              <use href={`${Icons}#icon-discord`} />
            </FormSvg>
          </FormIconWrapper>
          <FieldStyled
            type="text"
            id="discord"
            name="discord"
            placeholder="@USERNAME"
          />
          <ErrorMessage name="discord" />
        </FormWrapper>
        <FormWrapper>
          <label htmlFor="wallet"></label>
          <FormIconWrapper>
            <FormSvg>
              <use href={`${Icons}#icon-fox`} />
            </FormSvg>
          </FormIconWrapper>
          <FieldStyled
            type="text"
            id="wallet"
            name="wallet"
            placeholder="WALLET ADDRESS"
          />
          <ErrorMessage name="wallet" />
        </FormWrapper>
        <FormBtn type="submit">Mint</FormBtn>
      </FormStyled>
    </Formik>
  );
};
