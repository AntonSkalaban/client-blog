"use client";
import { FC, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";

import { Alert } from "components";
import { FormInput } from "components/Contact/ContactForm/FormInputs/FormInput";

import { getShema, sandEmail } from "./helpers";
import { FormValue } from "./types";
import "./style.scss";

export const Subscribe: FC = () => {
  const t = useTranslations("footer.subscribe");
  const localActive = useLocale() as "ru" | "en";
  const form = useRef<HTMLFormElement>(null);
  const schema = getShema(localActive);
  const [emailMessage, setEmailMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "all" });

  const onSubmit: SubmitHandler<FormValue> = async () => {
    if (!form.current) return;
    const emailMessage = await sandEmail(form.current, localActive);
    setEmailMessage(emailMessage);
    setIsAlertOpen(true);
    setTimeout(() => setIsAlertOpen(false), 3000);
  };

  return (
    <>
      {isAlertOpen && <Alert message={emailMessage} />}
      <section className="subscribe">
        <h2 className="subscribe__title">{t("title")}</h2>
        <form className="subscribe__form" ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="text-normal subscribe__input-container">
            <FormInput
              className="subscribe__email"
              placeholder={t("email")}
              error={errors.email?.message}
              {...register("email")}
            />
          </div>

          <button className="button-yellow subscribe__btn">{t("button")}</button>
        </form>
      </section>
    </>
  );
};
