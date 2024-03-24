import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  CustomErrorMessage,
  ErrorWrapper,
  FieldStyled,
  FormBtn,
  FormIconWrapper,
  FormStyled,
  FormSvg,
  FormWrapper,
} from "./Form.styled";
import Icons from "../../img/svg/icons.svg";
import { useState } from "react";
import { notify } from "../Toast/Toast";
import { Toaster } from "react-hot-toast";

export const FormComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
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
        onSubmit={() => {
          notify();
          setIsSubmitted(true);
        }}
      >
        {({ errors, touched }) => (
          <FormStyled>
            <FormWrapper>
              <label htmlFor="discord"></label>
              <FormIconWrapper>
                <FormSvg style={{ fill: "#5A65F2" }}>
                  <use href={`${Icons}#icon-discord`} />
                </FormSvg>
              </FormIconWrapper>
              <ErrorWrapper>
                <FieldStyled
                  type="text"
                  id="discord"
                  name="discord"
                  placeholder="@USERNAME"
                  className={errors.discord && touched.discord ? "error" : ""}
                />

                <ErrorMessage name="discord" component={CustomErrorMessage} />
              </ErrorWrapper>
            </FormWrapper>
            <FormWrapper>
              <label htmlFor="wallet"></label>
              <FormIconWrapper>
                <FormSvg>
                  <use href={`${Icons}#icon-fox`} />
                </FormSvg>
              </FormIconWrapper>
              <ErrorWrapper>
                <FieldStyled
                  type="text"
                  id="wallet"
                  name="wallet"
                  placeholder="WALLET ADDRESS"
                  className={errors.wallet && touched.wallet ? "error" : ""}
                />
                <ErrorMessage name="wallet" component={CustomErrorMessage} />
              </ErrorWrapper>
            </FormWrapper>
            <FormBtn type="submit" disabled={isSubmitted}>
              {(errors.wallet && touched.wallet) ||
              (errors.discord && touched.discord)
                ? "Error"
                : isSubmitted
                ? "Minted"
                : "Mint"}
            </FormBtn>
          </FormStyled>
        )}
      </Formik>
      <Toaster />
    </>
  );
};
