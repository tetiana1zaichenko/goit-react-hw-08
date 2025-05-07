import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
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
        {/* <button
        className={s.button}
        onClick={() => dispatch(deleteContact(item.id))}
      > */}
        Delete
      </button>
    </div>
  );
};

export default Contact;
