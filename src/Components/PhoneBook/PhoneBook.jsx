import css from "./PhoneBook.module.css";
import { selectError, selectIsLoading } from "../../redux/Contacts/selector";
import { useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
// import { lazy } from "react";

import { ContactForm } from "../ContactForm/ContactForm";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";

// const ContactForm = lazy(() => import("../ContactForm/ContactForm"));
// const ContactList = lazy(() => import("../ContactList/ContactList"));
// const SearchBox = lazy(() => import("../SearchBox/SearchBox"));

export default function PhoneBook() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div className={css.box}>
      <div className={css.form}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
}
