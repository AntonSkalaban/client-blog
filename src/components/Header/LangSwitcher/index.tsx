import { ChangeEvent, FC, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import { Dialog } from "components";
import { locales } from "constants/index";
import Globe from "assets/images/svg/globe.svg";

import "./style.scss";

export const LangSwitcher: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale() as "ru" | "en";
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleLangClick = (lang: string) => () => {
    router.replace(pathname.replace(localActive, lang));
  };

  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname.replace(localActive, e.target.value));
  };

  return (
    <div className="lang-switcher">
      <div className="lang-switcher__select-container">
        <Globe />
        <select className="lang-switcher__select" value={localActive} onChange={handleLangChange}>
          {locales.map((lang) => (
            <option key={lang} value={lang}>
              {lang.toLocaleUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <button className="lang-switcher__btn" data-testid="lang-btn" onClick={handleToggle}>
        <Globe />
        <p>{localActive.toLocaleUpperCase()}</p>
      </button>

      {isOpen && (
        <Dialog>
          {locales.map((lang) => (
            <p
              className="text-big lang-switcher__text"
              key={lang}
              onClick={handleLangClick(lang)}
              data-testid={`locale-${lang}`}
            >
              {lang.toLocaleUpperCase()}
            </p>
          ))}
        </Dialog>
      )}
    </div>
  );
};
