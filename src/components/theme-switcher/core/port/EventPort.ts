import type { EventType } from "@/components/theme-switcher/core/EventType.ts";

export interface EventPort {
  addEventOn(element: EventType, callback: (event: Event) => void): void;
}
