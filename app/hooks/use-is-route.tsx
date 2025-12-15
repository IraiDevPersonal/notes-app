import { usePathname } from "next/navigation";

type UseIsRouteProps = {
  href: string;
  exact?: boolean;
};

export function useIsRoute({ href, exact = false }: UseIsRouteProps) {
  const pathname = usePathname();
  return exact ? pathname === href : pathname.includes(href);
}
