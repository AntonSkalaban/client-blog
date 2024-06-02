import { FC } from "react";
import Link from "next/link";

import { mediaIcons } from "./constants";
import { mediaKeys, MediaListProps } from "./types";
import "./style.scss";

export const MediaList: FC<MediaListProps> = ({ links }) => {
  return (
    <div className="media-list">
      {Object.entries(links).map(([key, path]) => (
        <Link key={key} href={path}>
          {mediaIcons[key as mediaKeys]}
        </Link>
      ))}
    </div>
  );
};
