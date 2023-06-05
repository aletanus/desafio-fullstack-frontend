import * as yup from "yup"

export const contactSchema = yup.object().shape({

    first_name: yup
    .string()
    .required('O nome é obrigatório'),

    phone_number: yup.string().required("O número de telefone é obrigatório"),

})