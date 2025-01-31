import { NextResponse } from 'next/server';
import type { Service } from '@/types';

const services: Service[] = [
  {
    id: "1",
    name: "Personal Training Session",
    description: "One-on-one fitness training with a certified trainer",
    price: 75.00,
    duration: "60 min",
    category: "Fitness",
  },
  {
    id: "2",
    name: "Yoga Class",
    description: "Group yoga session for all skill levels",
    price: 25.00,
    duration: "45 min",
    category: "Wellness",
  },
  {
    id: "3",
    name: "Massage Therapy",
    description: "Full body massage with licensed therapist",
    price: 90.00,
    duration: "60 min",
    category: "Wellness",
  },
  {
    id: "4",
    name: "Nutrition Consultation",
    description: "Personalized nutrition planning and advice",
    price: 120.00,
    duration: "90 min",
    category: "Health",
  },
];

export async function GET() {
  return NextResponse.json(services);
}
