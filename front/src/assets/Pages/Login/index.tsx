import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../Components/Input";
import { loginSchema } from "./loginSchema";
import { Navbar } from "../../Components/Navbar";
import { UserContext } from "../../../Context/userContext";
import { useContext } from "react";
import { StyledLoginPage } from "./script";
import { StyledForm } from "../../../Styles/form-style";
import { StyledButton, StyledLink } from "../../../Styles/buttons-style";
import { iLoginFormValues } from "./@types";
import React from "react";

export const LoginPage = () => {
  const { userLogin, loading, setLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<iLoginFormValues>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginFormValues> = async (data) => {

    userLogin(data, setLoading);

    reset({
      email: "",
      password: "",
    });
  };

  return (
    <StyledLoginPage>
      <Navbar hidden={true} onClick={undefined} buttonTitle={undefined} type={undefined} />

      <main>
        <h2>Login</h2>

        <StyledForm noValidate onSubmit={handleSubmit(submit)}>
          <Input
            type="email"
            id="email"
            label="E-mail "
            placeholder="Digite aqui o seu e-mail"
            register={register("email")}
            disabled={loading} value={undefined} readOnly={undefined} autoComplete={undefined}          />
          {errors.email && (
            <p className="p-error" aria-label="Error: E-mail">
              {errors.email.message}
            </p>
          )}

          <Input
            autoComplete="autoComplete"
            type="password"
            id="password"
            label="Senha "
            placeholder="Crie aqui a sua senha"
            register={register("password")}
            disabled={loading} value={undefined} readOnly={undefined}          />
          {errors.password && (
            <p className="p-error" aria-label="Error: Password">
              {errors.password.message}
            </p>
          )}

          <StyledButton
            className="pink-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Solicitando login..." : "Entrar"}
          </StyledButton>

          <div>
            <p className="p">Ainda não possui uma conta?</p>
          </div>

          <StyledLink className="grey-Link" to={"/register"}>
            Cadastre-se
          </StyledLink>
        </StyledForm>
      </main>
    </StyledLoginPage>
  );
}
