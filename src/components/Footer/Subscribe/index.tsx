"use client";
import { FC, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";

import { Alert } from "components/UI/Alert";

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
  } = useForm({ resolver: yupResolver(schema) });

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
            <input
              className="subscribe__email"
              type="text"
              placeholder={t("email")}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-normal subscribe__input-error">{errors.email.message}</p>
            )}
          </div>

          <button className="button-yellow">{t("button")}</button>
        </form>
      </section>
    </>
  );
};
