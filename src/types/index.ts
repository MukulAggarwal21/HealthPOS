import { create } from "zustand";
import type { Service } from "@/types";

interface CartStore {
  items: Service[];
  addItem: (service: Service) => void;
  removeItem: (serviceId: string) => void;
  clearCart: () => void;
  total: number;
}




export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (service) => 
    set((state) => ({ 
      items: [...state.items, service],
      total: get().total + service.price,
    })),
  removeItem: (serviceId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== serviceId),
      total: get().total - state.items.find(item => item.id === serviceId)?.price || 0,
    })),
  clearCart: () => set({ items: [], total: 0 }),
  total: 0,
}));