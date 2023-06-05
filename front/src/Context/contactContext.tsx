// import { api } from "../assets/Api";
// import React, { useEffect, useState, createContext } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { UserContext } from "./userContext";
// import { useContext } from "react";
// import { iContactFormValues } from "../assets/Pages/Dashboard/Modal/@types";
// import { iContact, iContactsContext } from "./@types";

// export const ContactContext = createContext({} as iContactsContext);

// export const ContactProvider = ({ children }) => {
//   const { userToken, loggedUserData } =
//     useContext(UserContext);
//   const [modal, setModal] = useState(false);
//   const [modalEdit, setModalEdit] = useState(false);
//   const [usersContacts, setUsersContacts] = useState<iContact[] | []>([]);

//   api.defaults.headers.authorization = `Bearer ${userToken}`;

//   const registerUsersContact = async (formData: iContactFormValues) => {
//     console.log(formData);
//     if (userToken) {
//       const postContact = async () => {
//         try {
//           const response = await api.post("/contacts", formData);
//           toast.success(
//             `${loggedUserData?.name
//               .toUpperCase()
//               .trim()}, novo contato adicionado.`
//           );
//           setUsersContacts(
//             [...usersContacts, response.data].sort((a, b) =>
//               a.first_name.toLowerCase().localeCompare(b.first_name.toLowerCase())
//             )
//           );
//         } catch (error) {
//           console.log(error);
//           toast.success(
//             `${loggedUserData?.name.toUpperCase().trim()}, ${
//               error.response.data.message
//             }.`
//           );
//         } finally {
//           setModal(false);
//         }
//       };
//       postContact();
//     }
//   };

//   const contacts = async () => {
//     console.log("NÃO");
//     if (userToken) {
//       console.log(userToken)
//       const getUsersContacts = async () => {
//         try {
//           api.defaults.headers.authorization = `Bearer ${userToken}`;
//           const response = await api.get("/contacts");
//           setUsersContacts(response.data);

//           console.log(response.data)
//           console.log("SIM");

//         } catch (error) {
//           console.log("NÃO");
//           console.log(error);
//           // toast.success(
//           //   `${loggedUserData?.name.toUpperCase().trim()}, ${
//           //     error.response.data.message
//           //   }.`
//           // );
//         } finally {
//           // setModal(false);
//         }

//     }
//     getUsersContacts()
 
//     }
    
//   }
  
//   const editUsersContact = async (editedContact: iContactFormValues) => {
//     if (userToken) {
//       const editContact = async () => {
//         try {
//           const response = await api.put(
//             `/contacts/${contact.id}`,
//             editedContact
//           );
//           toast.success(
//             `${loggedUserData?.name.toUpperCase().trim()}, tecnologia editada!`
//           );
//           const uneditedContacts = usersContacts.filter(
//             (skill) => skill.title !== editedContact.title
//           );
//           setUsersContacts(
//             [...uneditedContacts, response.data].sort((a, b) =>
//               a.title.toLowerCase().localeCompare(b.title.toLowerCase())
//             )
//           );
//         } catch (error) {
//           console.log(error);
//           console.log(error.response);
//           toast.success(
//             `${loggedUserData?.name.toUpperCase().trim()}, ${
//               error.response.data.message
//             }.`
//           );
//         } finally {
//           setModalEdit(false);
//         }
//       };
//       editContact();
//     }
//   };

//   const contactDelete = async (contactId) => {
//     try {
//       const response = await api.delete(`/users/contacts/${contactId}`);
//       toast.success(
//         `${loggedUserData?.name.toUpperCase().trim()}, tecnologia excluída.`
//       );
//       const newContacts = usersContacts.filter(
//         (skill) => skill.id !== contactId
//       );
//       setUsersContacts(newContacts);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setModal(false);
//     }
//   };

//   return (
//     <ContactContext.Provider
//       value={{
//         contacts,
//         registerUsersContact,
//         modal,
//         setModal,
//         editUsersContact,
//         usersContacts,
//         setUsersContacts,
//         modalEdit,
//         setModalEdit,
//         contactDelete,
//       }}
//     >
//       {children}
//     </ContactContext.Provider>
//   );
// };



import { api } from "../assets/Api";
import React, { useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./userContext";
import { useContext } from "react";
import { iContactFormValues } from "../assets/Pages/Dashboard/Modal/@types";
import { iContact, iContactsContext } from "./@types";

export const ContactContext = createContext({} as iContactsContext);

export const ContactProvider = ({ children }) => {
  const { userToken, loggedUserData } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [usersContacts, setUsersContacts] = useState<iContact[]>([]);

  api.defaults.headers.authorization = `Bearer ${userToken}`;

  useEffect(() => {
    if (userToken) {
      api.defaults.headers.authorization = `Bearer ${userToken}`;
    }
  }, [userToken]);

  const registerUsersContact = async (formData: iContactFormValues) => {
    if (userToken) {
      try {
        const response = await api.post("/contacts", formData);
        toast.success(`${loggedUserData?.name.toUpperCase().trim()}, novo contato adicionado.`);
        setUsersContacts([...usersContacts, response.data].sort((a, b) =>
          a.first_name.toLowerCase().localeCompare(b.first_name.toLowerCase())
        ));
      } catch (error) {
        console.log(error);
        toast.success(`${loggedUserData?.name.toUpperCase().trim()}, ${error.response.data.message}.`);
      } finally {
        setModal(false);
      }
    }
  };

  const contacts = async () => {
    if (userToken) {
      try {
        api.defaults.headers.authorization = `Bearer ${userToken}`;
        const response = await api.get("/contacts");

        console.log(response.data)
        setUsersContacts(response.data);
        // console.log(usersContacts)
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    contacts();
  }, [userToken]);

  const editUsersContact = async (editedContact: iContactFormValues) => {
    if (userToken) {
      const editContact = async () => {
        try {
          const response = await api.put(
            `/contacts/${contact?.id}`,
            editedContact
          );
          toast.success(
            `${loggedUserData?.name.toUpperCase().trim()}, tecnologia editada!`
          );
          const uneditedContacts = usersContacts.filter(
            (skill) => skill.title !== editedContact.title
          );
          setUsersContacts(
            [...uneditedContacts, response.data].sort((a, b) =>
              a.title.toLowerCase().localeCompare(b.title.toLowerCase())
            )
          );
        } catch (error) {
          console.log(error);
          console.log(error.response);
          toast.success(
            `${loggedUserData?.name.toUpperCase().trim()}, ${
              error.response.data.message
            }.`
          );
        } finally {
          setModalEdit(false);
        }
      };
      editContact();
    }
  };

  const contactDelete = async (contactId) => {
    try {
      const response = await api.delete(`/users/contacts/${contactId}`);
      toast.success(
        `${loggedUserData?.name.toUpperCase().trim()}, tecnologia excluída.`
      );
      const newContacts = usersContacts.filter(
        (skill) => skill.id !== contactId
      );
      setUsersContacts(newContacts);
    } catch (error) {
      console.log(error);
    } finally {
      setModal(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        registerUsersContact,
        modal,
        setModal,
        editUsersContact,
        usersContacts,
        setUsersContacts,
        modalEdit,
        setModalEdit,
        contactDelete,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};