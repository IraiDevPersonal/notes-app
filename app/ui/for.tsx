import React from "react";

type GenericObjectWithKey = Record<string, unknown> & { key: string };

type Props<T extends GenericObjectWithKey> = {
  items: T[];
  fallback?: React.ReactNode;
  children: (item: Omit<T, "key">, index: number) => React.ReactNode;
};

export function For<T extends GenericObjectWithKey>({
  items,
  fallback,
  children,
}: Props<T>) {
  return (
    <>
      {items.length === 0 && fallback}
      {items.map(({ key, ...item }, index) => (
        <React.Fragment key={key}>{children(item, index)}</React.Fragment>
      ))}
    </>
  );
}
