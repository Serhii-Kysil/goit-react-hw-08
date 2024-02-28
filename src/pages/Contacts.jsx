import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Components/Loader/Loader";
import { selectError, selectIsLoading } from "../redux/Contacts/selector";
import { fetchContacts } from "../redux/Contacts/operations";
import DocumentTitle from "../Components/DocumentTitle";

const ContactForm = lazy(() => import("../Components/ContactForm/ContactForm"));
const ContactList = lazy(() => import("../Components/ContactList/ContactList"));
const SearchBox = lazy(() => import("../Components/SearchBox/SearchBox"));

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
      <div>
        <Suspense fallback={<Loader />}>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          {isLoading && !error && <Loader />}
          <ContactList />
        </Suspense>
      </div>
    </>
  );
}
