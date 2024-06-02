export type mediaKeys = "facebook" | "twitter" | "instagram" | "linkedIn";

export interface MediaListProps {
  links: {
    [K in mediaKeys]: string;
  };
}
