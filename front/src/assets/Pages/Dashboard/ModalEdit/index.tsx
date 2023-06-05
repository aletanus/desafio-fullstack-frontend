// import { useContext, useState } from "react"
// import { ContactContext } from "../../../../Context/contactContext"
// import { useForm } from "react-hook-form"
// import { yupResolver} from "@hookform/resolvers/yup"
// import { editContactSchema } from "./editContactSchema" 
// import { StyledForm } from "../../../../Styles/form-style"
// import { Header } from "../../../Components/Header"
// import { Input } from "../../../Components/Input"
// import { StyledModalEditContact } from "./style"
// import { StyledButton } from "../../../../Styles/buttons-style"
// import React from "react"

// export const ModalEditContact = () => {

//     const [loading, setLoading] = useState(false)
//     const { editUsersContact, contact, setModalEdit } = useContext(ContactContext)
//     const { register, handleSubmit, formState: {errors}, reset } = useForm ({
//         mode: "onChange",
//         resolver: yupResolver(editContactSchema)
//     })

//     const submit = async (newData) => {

//         editUsersContact (newData)
//         reset({
//             title: "",
//             status: "",
//         })
//     }

//   return (

//     <StyledModalEditContact>

//         <div>

//             <Header 
//                   onClick={() => setModalEdit(false)}
//                   username="Tecnologia Detalhes"
//                   buttonTitle="x"
//                   id="h2" className={undefined} pDescription={undefined} type={undefined} hidden={undefined}            />

//             <StyledForm noValidate onSubmit={handleSubmit(submit)}>

//                 <Input value={`${contact.title}`} readOnly="readOnly" type="text" id="title" label="Nome do projeto" placeholder="Nome do projeto" register={register("title")} disabled={loading} autoComplete={undefined}/>
//                 {errors.title && <p aria-label="Error: Title">{errors.title.message}</p>}
                
//                 <fieldset>
//                     <label htmlFor="status">Status </label>
//                     <select id="status" {...register("status")}>
//                         <option key="Iniciante" value="Iniciante">Iniciante</option>
//                         <option key="Intermediário" value="Intermediário">Intermediário</option>
//                         <option key="Avançado" value="Avançado">Avançado</option>
//                     </select>
//                 </fieldset>

//                 <StyledButton className='pink-button' type="submit" disabled={loading}>
//                     {loading ? 'Cadastrando...' : 'Salvar alterações'}
//                 </StyledButton>

//             </StyledForm>

//         </div>

//     </StyledModalEditContact>
//   )

// }