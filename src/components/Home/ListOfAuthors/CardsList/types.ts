import { StaticImageData } from "next/image";

export interface Author {
  id: number;
  name: string;
  image: StaticImageData;
  profession: string;
  company: string;
  contacts: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedIn: string;
  };
}
