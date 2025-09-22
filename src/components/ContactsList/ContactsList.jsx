import {useSelector} from "react-redux";
import ContactItem from "../ContactItem/ContactItem";

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts);

  return (
      <ul>
        {contacts.map((contact) => {
          return <ContactItem key={contact.id} contact={contact}/>
        })}
      </ul>
  );
}

export default ContactsList;