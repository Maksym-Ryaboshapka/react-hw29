import ContactEditor from "./components/ContactEditor/ContactEditor";
import ContactsList from "./components/ContactsList/ContactsList";

const App = () => {
  return (
      <div className="App">
        <h1>Phonebook</h1>

        <ContactEditor />
        <ContactsList />
      </div>
  );
};

export default App;