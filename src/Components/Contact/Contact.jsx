import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/Contacts/operations";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContacts(contact.id));
  };

  return (
    <li className={css.listItem}>
      <div className={css.itemCont}>
        <p className={css.par}>
          <BsFillPersonFill color="#0f388a" /> {contact.name}
        </p>
        <p className={css.par}>
          <FaPhone color="#0f388a" /> {contact.number}
        </p>
      </div>
      <div className={css.btnCont}>
        <Button
          className={css.btn}
          variant="outlined"
          size="small"
          onClick={handleDeleteContact}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};
