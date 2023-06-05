import * as yup from "yup"

export const registerSchema = yup.object().shape({
    name: yup
    .string()
    .required('O nome é obrigatório')
    .min(3, "O nome precisa de ao menos 3 caracteres"),

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

    passwordConfirm: yup
    .string()
    .test('passwords-match', 'A senha precisa combinar.', function(value){
        return this.parent.password === value
    }),
      
    profile_photo: yup
    .string()
    .url("A URL fornecida não é válida")
    // .required("É necessário falar algo sobre você.")
    // .min(3, "A bio precisa ao menos de 3 caracteres")
    // .max(150, "A bio pode ter no máximo 150 caracteres."),

    // contact: yup
    // .string(),
    // // .required("É necessário deixar uma opção de contato.")
    // // .min(3, "O contato precisa ter ao menos 3 caracteres"),

    // course_module: yup.string()
    // // .required("Escolha um módulo"),
})