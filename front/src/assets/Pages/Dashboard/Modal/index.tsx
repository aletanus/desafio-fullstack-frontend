import { useContext, useState } from "react"
import { ContactContext } from "../../../../Context/contactContext"
import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup"
import { contactSchema } from "./contactSchema"
import { StyledForm } from "../../../../Styles/form-style"
import { Header } from "../../../Components/Header"
import { Input } from "../../../Components/Input"
import { StyledModalCreateContact } from "./style"
import { StyledButton } from "../../../../Styles/buttons-style"
import React from "react"
import { iContactFormValues } from "./@types"

export const ModalCreateContact = () => {

    const [loading, setLoading] = useState(false); 
    const { registerUsersContact, setModal } = useContext(ContactContext)
    const { register, handleSubmit, formState: {errors}, reset } = useForm<iContactFormValues>({
        mode: "onChange",
        resolver: yupResolver(contactSchema)
    });

    const submit = async (data) => {

        registerUsersContact (data)
        reset({
            first_name: "",
            phone_number: "",
            phone_number_category: "",
        });
    }

  return (

    <StyledModalCreateContact>

        <div>

            <Header 
                  onClick={() => setModal(false)}
                  username="Cadastrar Contato"
                  buttonTitle="x"
                  id="h2" className={undefined} pDescription={undefined} type={undefined} hidden={undefined}            />

            <StyledForm noValidate onSubmit={handleSubmit(submit)}>

                <Input type="text" id="first_name" label="Contato" placeholder="Nome do contato" register={register("first_name")} disabled={loading} value={undefined} readOnly={undefined} autoComplete={undefined}/>
                {errors.first_name && <p className="p-error" aria-label="Error: first_name">{errors.first_name.message}</p>}
                
                <Input type="text" id="phone_number" label="Contato" placeholder="Número de telefone" register={register("phone_number")} disabled={loading} value={undefined} readOnly={undefined} autoComplete={undefined}/>
                {errors.phone_number && <p className="p-error" aria-label="Error: phone_number">{errors.phone_number.message}</p>}

                <fieldset>
                    <label htmlFor="phone_number_category">Categoria do número</label>
                    <select id="phone_number_category" {...register("phone_number_category")}>
                        <option key="principal" value="principal">Principal</option>
                        <option key="home" value="home">Home</option>
                        <option key="commercial" value="commercial">Commercial</option>
                        <option key="others" value="others">Others</option>
                    </select>
                </fieldset>

                <StyledButton className='pink-button' type="submit" disabled={loading}>
                    {loading ? 'Cadastrando...' : 'Cadastrar Contato'}
                </StyledButton>

            </StyledForm>

        </div>

    </StyledModalCreateContact>
  )

}