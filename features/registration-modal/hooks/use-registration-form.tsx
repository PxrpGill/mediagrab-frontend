import { useForm } from "react-hook-form";

type RegistrationInputsType = {
  username: string;
  email: string;
  password: string;
};

export const useRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationInputsType>({
    mode: "onChange",
  });

  const inputs = [
    {
      id: "username",
      label: "Имя пользователя",
      type: "text",
      ...register("username", {
        required: "Имя пользователя обязательно",
        minLength: {
          value: 3,
          message: "Имя пользователя должно быть не менее 3 символов",
        },
        maxLength: {
          value: 20,
          message: "Имя пользователя должно быть не более 20 символов",
        },
        pattern: {
          value: /^[a-zA-Z0-9_]+$/,
          message:
            "Можно использовать только буквы, цифры и нижнее подчеркивание",
        },
      }),
      error: errors.username?.message,
    },
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
