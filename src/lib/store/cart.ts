

// import { create } from "zustand";
// import { Service } from '@/types';

// interface CartStore {
//   items: Service[];
//   addItem: (service: Service) => void;
//   removeItem: (serviceId: string) => void;
//   clearCart: () => void;
//   total: number;
// }

// export const useCartStore = create<CartStore>((set, get) => ({
//   items: [],
//   addItem: (service) => 
//     set((state) => ({ 
//       items: [...state.items, service],
//       total: get().total + service.price,
//     })),

//   removeItem: (serviceId) => 
//     set((state) => {
//       const itemIndex = state.items.findIndex(item => item.id === serviceId);
//       if (itemIndex === -1) return state; 

//       const updatedItems = [...state.items];
//       const removedItem = updatedItems.splice(itemIndex, 1)[0]; 

//       return {
//         items: updatedItems,
//         total: get().total - removedItem.price, 
//       };
//     }),

//   clearCart: () => set({ items: [], total: 0 }),
//   total: 0,
// }));


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