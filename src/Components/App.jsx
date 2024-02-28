import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader/Loader";
import { selectError, selectIsLoading } from "../redux/selector";
import { fetchContacts } from "../redux/operations";

const ContactForm = lazy(() => import("./ContactForm/ContactForm"));
const ContactList = lazy(() => import("./ContactList/ContactList"));
const SearchBox = lazy(() => import("./SearchBox/SearchBox"));

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
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

export default App;
