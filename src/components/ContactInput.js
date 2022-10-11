import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    //init state
    this.state = {
      name: "",
      tag: "",
    };

    //binding
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <form
              className='contact-input'
              onSubmit={this.onSubmitEventHandler}
            >
              <input
                type='text'
                placeholder={locale === "id" ? "Nama" : "Name"}
                value={this.state.name}
                onChange={this.onNameChangeEventHandler}
              />
              <input
                type='text'
                placeholder='Tag'
                value={this.state.tag}
                onChange={this.onTagChangeEventHandler}
              />
              <button type='submit'>
                {locale === "id" ? "Tambah" : "Submit"}
              </button>
            </form>
          );
        }}
      </LocaleConsumer>
    );
  }
}

ContactInput.propType = {
  addContact: PropTypes.func.isRequired,
};

export default ContactInput;
