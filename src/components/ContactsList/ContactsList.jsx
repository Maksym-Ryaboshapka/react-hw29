import {useSelector} from "react-redux";
import ContactItem from "../ContactItem/ContactItem";

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  return (
      <ul>
        {contacts.map((contact) => {
          if (contact.name.toLowerCase().includes(filter)) {
            return <ContactItem key={contact.id} contact={contact}/>
          }

          return null;
        })}
      </ul>
  );
}

export default ContactsList;