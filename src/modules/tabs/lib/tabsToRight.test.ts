import { describe, expect, it } from "vitest";
import { tabsOtherThan, tabsToRight } from "./tabsToRight";
import type { Tab } from "./useTabs";

function term(id: number): Tab {
  return {
    id,
    kind: "terminal",
    spaceId: "default",
    title: "shell",
    paneTree: { kind: "leaf", id: id * 10 },
    activeLeafId: id * 10,
  } as Tab;
}

describe("tabsToRight", () => {
  it("returns every tab after the selected tab in visible order", () => {
    expect(tabsToRight([term(1), term(2), term(3), term(4)], 2)).toEqual([
      3, 4,
    ]);
  });

  it("returns an empty list for the last or missing tab", () => {
    const tabs = [term(1), term(2)];

    expect(tabsToRight(tabs, 2)).toEqual([]);
    expect(tabsToRight(tabs, 99)).toEqual([]);
  });
});

describe("tabsOtherThan", () => {
  it("returns every tab except the selected tab in visible order", () => {
    expect(tabsOtherThan([term(1), term(2), term(3), term(4)], 2)).toEqual([
      1, 3, 4,
    ]);
  });

  it("returns an empty list for a missing tab", () => {
    expect(tabsOtherThan([term(1), term(2)], 99)).toEqual([]);
  });
});
