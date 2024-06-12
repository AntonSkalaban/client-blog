import { FC } from "react";

import { ContactForm, ContactHeader, ContactInfo, ContactMap } from "components";

import styled from "./styled.module.scss";

const Contact: FC = () => {
  return (
    <>
      <div className={styled["conatct-page__wrapper"]}>
        <ContactHeader />
        <ContactInfo />
        <ContactForm />
      </div>
      <ContactMap />
    </>
  );
};

export default Contact;
