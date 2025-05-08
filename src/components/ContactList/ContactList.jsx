import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
    <div>
      {loading && <p>Loading contacts...</p>}
      {error && <h2>Server is dead...</h2>}
      <ul className={s.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
