import * as yup from "yup"

export const loginSchema = yup.object().shape({

    email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("O e-mail digitado é inválido."),

    password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário ao menos um número.")
    .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário ao menos um caractere especial")
    .min(8, "É necessário uma senha de ao menos 8 caracteres"),

})