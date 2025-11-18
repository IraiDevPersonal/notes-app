import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function replaceUUID(value: string, newUUID: string) {
  // Patrón UUID: 8-4-4-4-12 caracteres hexadecimales
  // Ejemplo: 550e8400-e29b-41d4-a716-446655440000
  const UUID_PATTERN =
    /\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  if (UUID_PATTERN.test(value)) {
    // Reemplazar el UUID al final del pathname
    return value.replace(UUID_PATTERN, `/${newUUID}`);
  }

  // Si no hay UUID, agregar al final
  return `${value}/${newUUID}`;
}

export function arrayFromLength(length: number): { key: string }[] {
  return Array.from({ length }, () => ({ key: randomUUID() }));
}

export function randomUUID(): string {
  return v4();
}

export function randomPercentage(): string {
  return `${Math.floor(Math.random() * 40) + 50}%`;
}
