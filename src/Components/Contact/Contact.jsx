import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/operations";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContacts(contact.id));
  };

  return (
    <li className={css.listItem}>
      <div className={css.itemCont}>
        <p className={css.par}>
          <BsFillPersonFill /> {contact.name}
        </p>
        <p className={css.par}>
          {" "}
          <FaPhone /> {contact.phone}
        </p>
      </div>
      <div className={css.btnCont}>
        <button className={css.btn} onClick={handleDeleteContact}>
          Delete
        </button>
      </div>
    </li>
  );
};
