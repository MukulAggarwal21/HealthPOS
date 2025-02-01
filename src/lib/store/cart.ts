import { create } from 'zustand';
import { Service } from '@/types';

interface CartStore {
  items: (Service & { quantity: number })[];
  total: number;
  addItem: (item: Service) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      
      let newItems;
      if (existingItem) {
        newItems = state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        newItems = [...state.items, { ...item, quantity: 1 }];
      }

      const newTotal = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return { items: newItems, total: newTotal };
    }),
  removeItem: (itemId) =>
    set((state) => {
      const newItems = state.items.filter((i) => i.id !== itemId);
      const newTotal = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return { items: newItems, total: newTotal };
    }),
  clearCart: () => set({ items: [], total: 0 }),
}));