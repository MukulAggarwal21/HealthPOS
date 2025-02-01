
import { create } from "zustand";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
}

export interface Transaction {
  items: Service[];
  total: number;
  date: string;
  paymentMethod: string;
  status: "pending" | "completed" | "failed";
  transactionId?: string;
}

interface CartStore {
  items: Service[];
  addItem: (service: Service) => void;
  removeItem: (serviceId: string) => void;
  clearCart: () => void;
  total: number;
}
export interface DashboardProps {
  analyticsData: {
    totalRevenue: number;
    servicesSold: number;
    topServices: Array<{
      name: string;
      sales: number;
    }>;
 
  };
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
      const itemToRemove = state.items.find((item) => item.id === serviceId);
      const priceToDeduct = itemToRemove ? itemToRemove.price : 0;

      return {
        items: state.items.filter((item) => item.id !== serviceId),
        total: get().total - priceToDeduct,
      };
    }),
  clearCart: () => set({ items: [], total: 0 }),
  total: 0,
}));
