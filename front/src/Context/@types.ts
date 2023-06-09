import { NavigateFunction } from "react-router-dom";
import { iLoginFormValues } from "../assets/Pages/Login/@types";
import { iRegisterFormValues } from "../assets/Pages/Register/@types";
import { iContactFormValues } from "../assets/Pages/Dashboard/Modal/@types";

export interface iDefaultProviderProps{
    children: React.ReactNode;
}

export interface iUserRegisterResponse {
    data: iUserData;
}

export interface iUserData {
    token: string;
    user: iUser;
  }
  
  export interface iUser {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    created_at: string;
    updated_at: string;
    contacts:[];
    works: string;
    avatar_url: string | null;
  }

export interface iUserContext {
    
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    
    userRegister: (formData: iRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
    userLogin: (formData: iLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
    logout: (event: React.MouseEvent<HTMLButtonElement>) => void

    userToken: string | null

    loggedUserData: iUser | null;

    setloggedUserData: React.Dispatch<React.SetStateAction<iUser | null>>;

    navigate: NavigateFunction;
}

export interface iContact {
  user_id?: string;
  first_name: string;
  phone_number: string;
  phone_number_category: string;
}

export interface iContactsContext {
  contacts: () => Promise<void>;
  registerUsersContact: (formData: iContactFormValues) => Promise<void>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  editUsersContact: (editedContact: iContactFormValues) => Promise<void>;
  usersContacts: iContact[];
  setUsersContacts: React.Dispatch<React.SetStateAction<iContact[]>>;
  modalEdit: boolean;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  contactDelete: (contactId: any) => Promise<void>;
}