import { FC } from "react";

import { ContactForm, ContactHeader, ContactInfo } from "components";

import styled from "./styled.module.scss";

const Contact: FC = () => {
  return (
    <>
      <div className={styled["conatct-page__wrapper"]}>
        <ContactHeader />
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
