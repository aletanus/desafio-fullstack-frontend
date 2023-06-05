import * as yup from "yup"

export const editContactSchema = yup.object().shape({

    title: yup
    .string(),

    status: yup
    .string()
    .required("Selecione um status"),

})