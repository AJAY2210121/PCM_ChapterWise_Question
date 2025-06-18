import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Subject = 'physics' | 'chemistry' | 'mathematics';
export type Status = 'not_started' | 'in_progress' | 'completed';

interface FilterState {
  selectedClass: string[];
  selectedUnits: string[];
  selectedStatus: Status | null;
  showWeakChapters: boolean;
  setSelectedClass: (classes: string[]) => void;
  setSelectedUnits: (units: string[]) => void;
  setSelectedStatus: (status: Status | null) => void;
  setShowWeakChapters: (show: boolean) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      selectedClass: [],
      selectedUnits: [],
      selectedStatus: null,
      showWeakChapters: false,
      setSelectedClass: (classes) => set({ selectedClass: classes }),
      setSelectedUnits: (units) => set({ selectedUnits: units }),
      setSelectedStatus: (status) => set({ selectedStatus: status }),
      setShowWeakChapters: (show) => set({ showWeakChapters: show }),
      resetFilters: () => set({
        selectedClass: [],
        selectedUnits: [],
        selectedStatus: null,
        showWeakChapters: false,
      }),
    }),
    {
      name: 'filter-storage',
    }
  )
);