import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.cart}>
      <p className={s.contactText}>
        <FaUser /> {name}
      </p>
      <p className={s.contactText}>
        <FaPhoneAlt /> {number}
      </p>
      <button className={s.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
