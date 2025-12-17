export * from "./dropdown";
export * from "./dropdown-content";
export * from "./dropdown-trigger";
export * from "./dropdown-provider";

import { Dropdown as DropdownComponent } from "./dropdown";
import { DropdownProvider } from "./dropdown-provider";
import { DropdownContent } from "./dropdown-content";
import { DropdownTrigger } from "./dropdown-trigger";

const Dropdown = Object.assign(DropdownComponent, {
  Provider: DropdownProvider,
  Content: DropdownContent,
  Trigger: DropdownTrigger,
});

export { Dropdown };
