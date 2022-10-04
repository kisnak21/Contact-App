import React from "react";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

function ContactList({ contacts, onDelete }) {
  return contacts.length !== 0 ? (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact}
        />
      ))}
    </div>
  ) : (
    <div className="contact-list__empty-message">Tidak Ada Kontak.</div>
  );
}

ContactItem.proptype = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;