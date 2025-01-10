import { useState } from "react";
import { InputField } from "../components/InputField/InputField";
import { Section } from "../components/Section/Section";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";

export function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log("Input Values", email, password);

  return (
    <Section width="50%">
      <SectionTitle title={"Login"} />
      <form>
        <InputField
          type="email"
          placeholder="Indtast din mail.."
          name="Email"
          id="emailField"
          labelText="Email"
          action={setEmail}
        />
        <InputField
          type="password"
          placeholder={"Indtast dit password..."}
          name="Password"
          id="passwordField"
          labelText="Password"
          action={setPassword}
        />
      </form>
    </Section>
  );
}
