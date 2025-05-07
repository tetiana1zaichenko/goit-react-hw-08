import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={s.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
      {error && <h2>Server is dead...</h2>}
    </div>
  );
};

export default ContactList;
