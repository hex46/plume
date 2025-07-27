import { EventType } from "@/components/ThemeSwitcher/core/EventType.ts";

export interface EventPort {
  addEventOn(element: EventType, callback: (event: Event) => void): void;
}
