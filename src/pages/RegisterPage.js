import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { register } from "../utils/api";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className='register-page'>
            <h2>
              {locale === "id"
                ? "Gak perlu serius-serius ya isinya"
                : "No need to be serious about it hehehe"}{" "}
              ...
            </h2>
            <RegisterInput register={onRegisterHandler} />
            <p>
              Back to <Link to='/'>{locale === "id" ? "Masuk" : "Login"}</Link>
            </p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default RegisterPage;
