import type { Tab } from "./useTabs";

export function tabsToRight(tabs: Tab[], id: number): number[] {
  const index = tabs.findIndex((tab) => tab.id === id);
  if (index === -1) return [];
  return tabs.slice(index + 1).map((tab) => tab.id);
}

export function tabsOtherThan(tabs: Tab[], id: number): number[] {
  if (!tabs.some((tab) => tab.id === id)) return [];
  return tabs.filter((tab) => tab.id !== id).map((tab) => tab.id);
}
