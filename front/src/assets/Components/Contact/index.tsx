import React, {  useContext } from "react";
import trashLogo from "../../../assets/Trash-Delete-Icon.svg";
import editLogo from "../../../assets/Edit-Icon.png";
import { ContactContext } from "../../../Context/contactContext";

export const Contact = ({
  className,
  contactName,
  level,
  type,
  hidden,
  contact,
}) => {
  const { setModalEdit, setContact, contactDelete } =
    useContext(ContactContext);

  return (
    <li>
      <h3>{contactName}</h3>

      <div>
        <p hidden={hidden}>{level}</p>

        <div>
          <button
            className={className}
            type={type}
            hidden={hidden}
            onClick={() => (setModalEdit(true), setContact(contact))}
          >
            <figure>
              <img src={editLogo} alt="Edit" />
            </figure>
          </button>

          <button
            className={className}
            type={type}
            hidden={hidden}
            onClick={() => contactDelete(contact.id)}
          >
            <figure>
              <img src={trashLogo} alt="Trash" />
            </figure>
          </button>
        </div>
      </div>
    </li>
  );
};
