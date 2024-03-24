import { create } from 'zustand';

interface Breadcrumb {
  label: string;
  path: string;
}

interface Breadcrumbs {
  items: Breadcrumb[];
}

export interface BreadcrumbsState {
  breadcrumbs: Breadcrumbs;
  push: (item: Breadcrumb) => void;
  set: (newItems: Breadcrumb[]) => void;
  clearAll: () => void;
}

export const useBreadcrumbsStore = create<BreadcrumbsState>((set) => ({
  breadcrumbs: { items: [] },
  push: (item: Breadcrumb) =>
    set((state: BreadcrumbsState) => ({
      breadcrumbs: { items: [...state.breadcrumbs.items, item] },
    })),
  set: (newItems: Breadcrumb[]) =>
    set(() => ({ breadcrumbs: { items: newItems } })),
  clearAll: () => set({ breadcrumbs: { items: [] } }),
}));

export interface CurrentPageState {
  label: string;
  set: (label: string) => void;
}

export const useCurrentPageStore = create<CurrentPageState>((set) => ({
  label: '',
  set: (item: string) => set(() => ({ label: item })),
}));
