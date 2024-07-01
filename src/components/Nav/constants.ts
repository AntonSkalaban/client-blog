import { pagesEnNameEnam, pagesPathEnam, pagesRuNameEnam } from "types/pages";

export const pages = [
  { name: { en: pagesEnNameEnam.Home, ru: pagesRuNameEnam.Home }, path: pagesPathEnam.Home },
  { name: { en: pagesEnNameEnam.Blog, ru: pagesRuNameEnam.Blog }, path: pagesPathEnam.Blog },
  {
    name: { en: pagesEnNameEnam.AnoutUs, ru: pagesRuNameEnam.AnoutUs },
    path: pagesPathEnam.AnoutUs,
  },
  {
    name: { en: pagesEnNameEnam.ContacUs, ru: pagesRuNameEnam.ContacUs },
    path: pagesPathEnam.ContacUs,
  },
];
