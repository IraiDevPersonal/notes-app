import React from "react";

type Props<T extends object> = {
  items: (T & { key: string })[];
  fallback?: React.ReactNode;
  children: (item: T, index: number) => React.ReactNode;
};

export function For<T extends object>({ items, fallback, children }: Props<T>) {
  return (
    <>
      {items.length === 0 && fallback}
      {items.map(({ key, ...item }, index) => (
        <React.Fragment key={key}>{children(item as T, index)}</React.Fragment>
      ))}
    </>
  );
}
