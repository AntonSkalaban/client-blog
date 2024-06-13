"use client";
import { FC, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocale } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";

import { Alert } from "components";
import { useSendEmail } from "hooks";

import { FormInput } from "./FormInputs/FormInput";
import { FormSelect } from "./FormInputs/FormSelect";
import { FormTextArea } from "./FormInputs/FormTextArea";
import { schema } from "./constants";
import styled from "./styled.module.scss";
import { FormValues } from "./types";

const templateID = process.env.NEXT_PUBLIC_EMAILJS_FORM_TEMPLATE_ID;

const options = [
  { name: "name", value: "value" },
  { name: "name2", value: "value2" },
  { name: "name3", value: "value3" },
];

export const ContactForm: FC = () => {
  const localActive = useLocale() as "ru" | "en";
  const formRef = useRef<HTMLFormElement>(null);

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const { send, successMessage, isFetching, errorMessage } = useSendEmail();

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const query = watch("query");

  const onSubmit = async () => {
    if (!formRef.current) return;
    await send(formRef.current, localActive, templateID);

    setIsAlertOpen(true);
    setTimeout(() => setIsAlertOpen(false), 3000);
  };

  return (
    <>
      {isAlertOpen && <Alert message={successMessage || errorMessage} />}
      <form className={styled.form} ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <FormInput {...register("name")} error={errors.name?.message} placeholder="Full name" />
        <FormInput {...register("email")} error={errors.email?.message} placeholder="Your email" />

        <Controller
          control={control}
          name="query"
          render={({ field, formState: { errors } }) => (
            <FormSelect
              options={options}
              onChange={(value: string) => field.onChange(value)}
              title={query || "Query Related"}
              error={errors.query?.message}
            />
          )}
        />

        <FormTextArea
          {...register("message")}
          error={errors.message?.message}
          placeholder="Message"
        />
        <button className={`button-yellow ${styled["form__btn"]}`} disabled={isFetching}>
          {isFetching ? "Fetching..." : "Send Message"}
        </button>
      </form>
    </>
  );
};
