import { ClientOnly } from "./client";

import "../../reset.scss";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <ClientOnly />;
}
