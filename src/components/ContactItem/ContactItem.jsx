import {useDispatch} from "react-redux";
import {removeContact} from "../../redux/contacts/action";

const ContactItem = ({contact}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  return (
      <>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <button onClick={handleRemove}>Remove</button>
      </>
  );
};

export default ContactItem;