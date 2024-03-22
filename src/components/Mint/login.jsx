// export const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validateForm(formData);
//     if (Object.keys(errors).length === 0) {
//       // Место для отправки данных (например, через API)
//       console.log("Данные отправлены:", formData);
//     } else {
//       setErrors(errors);
//     }
//   };

//   const validateForm = (formData) => {
//     let errors = {};
//     if (!formData.username.trim()) {
//       errors.username = "Имя пользователя обязательно";
//     }
//     if (!formData.password.trim()) {
//       errors.password = "Пароль обязателен";
//     }
//     return errors;
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Имя пользователя:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         {errors.username && (
//           <span style={{ color: "red" }}>{errors.username}</span>
//         )}
//       </div>
//       <div>
//         <label htmlFor="password">Пароль:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && (
//           <span style={{ color: "red" }}>{errors.password}</span>
//         )}
//       </div>
//       <button type="submit">Войти</button>
//     </form>
//   );
// };

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string().required("Имя пользователя обязательно"),
        password: Yup.string().required("Пароль обязателен"),
      })}
      onSubmit={(values) => {
        console.log("Форма отправлена:", values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="username">Имя пользователя:</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage name="username" />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" />
        </div>
        <button type="submit">Войти</button>
      </Form>
    </Formik>
  );
};
