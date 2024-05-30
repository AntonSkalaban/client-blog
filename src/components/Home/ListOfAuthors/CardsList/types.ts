export interface Author {
  id: number;
  name: string;
  image: string;
  profession: string;
  company: string;
  contacts: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedIn: string;
  };
}
