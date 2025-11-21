import { useEffect, useRef } from "react";

type Props = {
  value: string | undefined;
};

export function useTextareaAutofocus({ value }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current && value) {
      ref.current.focus();
      const length = value.length;
      ref.current.setSelectionRange(length, length);
    }
  }, [value]);

  return ref;
}
