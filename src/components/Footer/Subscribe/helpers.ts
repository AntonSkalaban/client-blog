import * as yup from "yup";
import emailjs from "@emailjs/browser";

import { errors, publicKey, serviceID, templateID } from "./constants";

export const getShema = (lang: "ru" | "en") => {
  const schema = yup.object({
    email: yup.string().email(errors.email.valid[lang]).required(errors.email.required[lang]),
  });

  return schema;
};

export const sandEmail = async (form: HTMLFormElement, lang: "ru" | "en") => {
  if (!serviceID || !templateID || !publicKey) return lang === "en" ? "Error!" : "Ошибка!";

  try {
    await emailjs.sendForm(serviceID, templateID, form, {
      publicKey,
    });
    return lang === "en" ? "Sucsses!" : "Успешно!";
  } catch (e) {
    return (e as Error).message;
  }
};
