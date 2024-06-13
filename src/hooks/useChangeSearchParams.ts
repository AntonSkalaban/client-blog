import { useCallback } from "react";
import { ReadonlyURLSearchParams, usePathname, useRouter } from "next/navigation";

export const useChangeSearchParams = (searchParams: ReadonlyURLSearchParams) => {
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const changeSearchParams = (key: string, value: string) => {
    router.replace(pathname + "?" + createQueryString(key, value));
  };
  return { changeSearchParams };
};
