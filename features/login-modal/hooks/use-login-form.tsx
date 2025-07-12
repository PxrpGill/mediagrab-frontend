import { useForm } from "react-hook-form";

type LoginInputsType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInputsType>({
    mode: "onChange",
  });

  const inputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      ...register("email", {
        required: "Email обязателен",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Некорректный email",
        },
      }),
      error: errors.email?.message,
    },
    {
      id: "password",
      label: "Пароль",
      type: "password",
      ...register("password", {
        required: "Пароль обязателен",
        minLength: {
          value: 6,
          message: "Пароль должен быть не менее 6 символов",
        },
        maxLength: {
          value: 30,
          message: "Пароль должен быть не более 30 символов",
        },
        validate: (value) => {
          return (
            [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].some((pattern) =>
              pattern.test(value)
            ) ||
            "Пароль должен содержать хотя бы одну заглавную букву, одну строчную, одну цифру и один спецсимвол"
          );
        },
      }),
      error: errors.password?.message,
    },
  ];

  return { handleSubmit, inputs, errors, isValid };
};
