import { useState } from "react";
import emailjs from "@emailjs/browser";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const useSendEmail = () => {
  const [successMessage, setSuccessMesage] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (
    form: HTMLFormElement,
    lang: "ru" | "en",
    templateID: string | undefined,
  ) => {
    setIsFetching(true);
    if (!serviceID || !templateID || !publicKey)
      return setErrorMessage(lang === "en" ? "Error!" : "Ошибка!");

    try {
      await emailjs.sendForm(serviceID, templateID, form, {
        publicKey,
      });
      setSuccessMesage(lang === "en" ? "Success!" : "Успешно!");
    } catch (e) {
      setErrorMessage((e as Error).message || lang === "en" ? "Error!" : "Ошибка!");
    } finally {
      setIsFetching(false);
    }
  };

  return { successMessage, isFetching, errorMessage, send: sendEmail };
};
