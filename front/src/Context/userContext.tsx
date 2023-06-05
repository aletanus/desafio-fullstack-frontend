// import { api } from "../assets/Api" 
// import { useEffect, useState, createContext } from "react"
// import { useNavigate } from "react-router-dom"
// import { toast } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import { iUserContext } from "./@types"
// import { iLoginFormValues } from "../assets/Pages/Login/@types"
// import { iRegisterFormValues } from "../assets/Pages/Register/@types"

// export const UserContext = createContext({} as iUserContext)

// export const UserProvider = ({ children }) => {

//   const navigate = useNavigate()
//   // const navigateToLogin = useNavigate("/")
//   // const navigateToDashboard = useNavigate("/dashboard")
//   const userToken = localStorage.getItem("@USER.TOKEN")
//   const [loading, setLoading] = useState(false)
//   const [loggedUserData, setloggedUserData] = useState(null)
//   const [usersContacts, setUsersContacts] = useState([])

//   useEffect(() => {
    
//     const autoLogin = async () => {

//       if (userToken) {
//         try {
//           api.defaults.headers.authorization = `Bearer ${userToken}`
//           const response = await api.get("/profile")
//           setloggedUserData(response.data)
//           setUsersContacts(response.data.contacts)
//           // navigateToDashboard () 
//           navigate ("/") 
//         } catch (error) {
//           console.log(error)
//         } finally {
//           setLoading(false)
//         }
//       } else if (!userToken) {
//         // navigateToLogin ()
//         navigate ("/dashboard")
//       }
//     }
//     autoLogin()
//   }, [])

//   const userLogin = async (formData: iLoginFormValues) => {

//     try {
//       setLoading(true)
//       const response = await api.post("sessions", formData)
//       localStorage.setItem("@USER.TOKEN", response.data.token)
//       localStorage.setItem("@USER.ID", response.data.user.id)
//       toast.success(
//         `${response.data.user.name.toUpperCase().trim()}, seja bem vindo(a)!`
//       )
//       setloggedUserData(response.data.user)
//       setUsersContacts(response.data.user.contacts)
//       setTimeout(() => {
//         navigate("/dashboard")
//       }, 4000)
//     } catch (error) {
//       console.log(error.response.data.message)
//       toast.error(error.response.data.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const logout = (even) => {

//     even.preventDefault()
//     localStorage.removeItem("@USER.TOKEN")
//     localStorage.removeItem("@USER.ID")
//     toast.success(`${loggedUserData.name.toUpperCase().trim()}, até logo!`)
//     setTimeout(() => {
//       setloggedUserData(null)
//       navigate("/")
//     }, 4000)
//   }

//   const userRegister = async (formData: iRegisterFormValues) => {
    
//     try {
//       setLoading(true)
//       const response = await api.post("users", formData)
//       if (response) {
//           toast.success(`Oi ${response.data.name.toUpperCase()}! Agora faça o seu login.`)
//         setTimeout(() => {navigate("/")}, 4000)
//       }
//     } catch (error) {
//       toast.error(error.response)
//       console.log(error.response)
//       console.log(error.response.data.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <UserContext.Provider
//       value={{
//         toast,
//         navigate,
//         usersContacts,
//         setUsersContacts,
//         userToken,
//         userLogin,
//         logout,
//         userRegister,
//         loggedUserData,
//         setloggedUserData,
//         loading,
//         setLoading,
//         // navigateToLogin,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   )
// }



import { api } from "../assets/Api";
import React, { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { iUserContext, iUserData, iUser, iContact } from "./@types";
import { iLoginFormValues } from "../assets/Pages/Login/@types";
import { iRegisterFormValues } from "../assets/Pages/Register/@types";
import { ContactContext } from "./contactContext";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const userToken = localStorage.getItem("@USER.TOKEN");
  const userId = localStorage.getItem("@USER.ID");
  const [loading, setLoading] = useState(false);
  const [loggedUserData, setloggedUserData] = useState<iUser | null>(null); // Definindo o tipo correto para loggedUserData
  // const [usersContacts, setUsersContacts] = useState<iContact[] | []>([]);

  useEffect(() => {
    const autoLogin = async () => {
      if (userToken) {
        try {
          api.defaults.headers.authorization = `Bearer ${userToken}`;
          const response = await api.get(`/users/${userId}`);
          console.log(response)
          setloggedUserData(response.data);
          // contacts()
          // toast.success(`${response.data.name.toUpperCase().trim()}, seja bem vindo(a)!`);
          // setUsersContacts(response.data.contacts);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      } else {
        navigate("/");
      }
    };
    autoLogin();
  }, [userToken]);

  const userLogin = async (formData: iLoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      localStorage.setItem("@USER.TOKEN", response.data.token);
      localStorage.setItem("@USER.ID", response.data.id);
      console.log({response})
      console.log(response.data)
      setloggedUserData(response.data);
      toast.success(`Seja bem vindo(a)!`);
      // setUsersContacts(response.data.contacts);
      setTimeout(() => {
        // toast.success(`Seja bem vindo(a)!`);
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.log(error);
      // toast.error(error.response);
      // console.log(error.response.data.message);
      // toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (loggedUserData) {
      toast.success(`${loggedUserData.name.toUpperCase().trim()}, até logo!`);
      setTimeout(() => {
        setloggedUserData(null);
        localStorage.removeItem("@USER.TOKEN");
        localStorage.removeItem("@USER.ID");
        navigate("/");
      }, 4000);
    }
  };

  const userRegister = async (formData: iRegisterFormValues) => {
    console.log(formData)
    try {
      setLoading(true);
      const response = await api.post("users", formData);
      if (response) {
        toast.success(`Oi ${response.data.name.toUpperCase()}! Agora faça o seu login.`);
        setTimeout(() => {
          navigate("/");
        }, 4000);
      }
    } catch (error) {
      console.log("Olá")
      toast.error(error.response);
      console.log(error);
      // console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        // toast,
        navigate,
        // usersContacts,
        // setUsersContacts,
        userToken,
        userLogin,
        logout,
        userRegister,
        loggedUserData,
        setloggedUserData,
        loading,
        setLoading,
        // navigateToLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
