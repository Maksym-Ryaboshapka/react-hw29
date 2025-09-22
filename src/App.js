import ContactEditor from "./components/ContactEditor/ContactEditor";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";

const App = () => {
  return (
      <div className="App">
        <h1>Phonebook</h1>

        <ContactEditor />
        <Filter />
        <ContactsList />
      </div>
  );
};

export default App;