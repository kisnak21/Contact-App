import React from "react";
import { useSearchParams } from "react-router-dom";
import ContactList from "../components/ContactList";
import { getContacts, deleteContact } from "../utils/api";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [contacts, setContacts] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getContacts().then(({ data }) => {
      setContacts(data);
    });
  }, []);

  const onDeleteHandler = async (id) => {
    await deleteContact(id);

    //update contact state from api.js
    const { data } = await getContacts();
    setContacts(data);
  };

  const onKeywordHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const filteredContact = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <SearchBar keyword={keyword} keywordChange={onKeywordHandler} />
      <h2>{locale === "id" ? "Daftar Kontak" : "Contacts List"}</h2>
      <ContactList contacts={filteredContact} onDelete={onDeleteHandler} />
    </section>
  );
}

export default HomePage;
