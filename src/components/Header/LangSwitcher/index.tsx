import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import { Dialog } from "components/Dialog";
import { locales } from "constants/index";
import Globe from "assets/images/svg/globe.svg";

import "./style.scss";

export const LangSwitcher: FC = () => {
  const router = useRouter();
  const localActive = useLocale() as "ru" | "en";
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleLangClick = (lang: string) => () => {
    router.replace(`/${lang}`);
  };

  return (
    <div className="lang-switcher">
      <button className="lang-switcher__btn" onClick={handleToggle}>
        <Image className="lang-switcher__icon" src={Globe} alt="glob" />
        <p>{localActive.toLocaleUpperCase()}</p>
      </button>
      {isOpen && (
        <Dialog>
          {locales.map((lang) => (
            <p className="text-big lang-switcher__text" key={lang} onClick={handleLangClick(lang)}>
              {lang.toLocaleUpperCase()}
            </p>
          ))}
        </Dialog>
      )}
    </div>
  );
};
