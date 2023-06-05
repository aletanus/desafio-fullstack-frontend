
import React, { useState, useEffect } from "react";
import { Navbar } from "../../Components/Navbar";
import { Header } from "../../Components/Header";
import { Contact } from "../../Components/Contact";
import { UserContext } from "../../../Context/userContext";
import { ContactContext } from "../../../Context/contactContext";
import { useContext } from "react";
import { StyledPageTemplate } from "../../../Styles/page-template";
import { ModalCreateContact } from  "./Modal"
// import { ModalEditContact } from "./ModalEdit";

export const DashboardPage = () => {
  const { loggedUserData, logout } = useContext(UserContext);
  const { modal, setModal, modalEdit, usersContacts } = useContext(ContactContext);

  return (
    <>
      <StyledPageTemplate>
        <Navbar buttonTitle="Sair" type="" onClick={(even: React.MouseEvent<HTMLButtonElement>) => logout(even)} hidden={undefined} />
        <Header
          username={`Olá, ${loggedUserData?.name.toUpperCase().trim()}!`}
          pDescription={``}
          hidden={true}
          id="h2"
          className="p p-zero" buttonTitle={undefined} onClick={undefined} type={undefined}        />

        <main>
          <Header
            id="h2"
            className="p"
            username="Contatos"
            buttonTitle="+"
            type="button"
            onClick={() => setModal(true)} pDescription={undefined} hidden={undefined}          />

          <section>
            <article>
              <ul>
                {!usersContacts?.length ? (
                  <Contact
                    contactName={`Clique no botão "${"+"}" e adicione o seu primeiro contato.`}
                    type="button"
                    hidden={true} className={undefined} level={undefined} contact={undefined}                  />
                ) : (
                  usersContacts.map((contact) => (
                    <Contact
                      contact={contact}
                      key={`${contact.id}`}
                      contactName={`${contact.first_name}`}
                      level={`${contact.phone_number}`}
                      type="button" className={undefined} hidden={undefined}/>
                  ))
                )}
              </ul>
            </article>
          </section>
        </main>

        {modal && <ModalCreateContact />}

        {/* {modalEdit && <ModalEditContact />} */}
      </StyledPageTemplate>
    </>
  );
};