

import { create } from "zustand";
import { Service } from '@/types';

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
    set((state) => {
      const itemIndex = state.items.findIndex(item => item.id === serviceId);
      if (itemIndex === -1) return state; 

      const updatedItems = [...state.items];
      const removedItem = updatedItems.splice(itemIndex, 1)[0]; 

      return {
        items: updatedItems,
        total: get().total - removedItem.price, 
      };
    }),

  clearCart: () => set({ items: [], total: 0 }),
  total: 0,
}));
