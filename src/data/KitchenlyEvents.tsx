export enum KitchenlyEvents {
  TOGGLE_SIDEBAR,
  TOGGLE_FILTER,
}

export type KitchenlyEvents2 = ToggleFilterEvent | ToggleSidebarEvent;

export type ToggleSidebarEvent = {
  type: KitchenlyEvents.TOGGLE_SIDEBAR;
  subType: string;
};

export type ToggleFilterEvent = {
  type: KitchenlyEvents.TOGGLE_FILTER;
  tableName: string;
  onFilterApplied?: (data: object) => void;
  onFilterChanged?: (filters: string[]) => void;
};
