"use client";

import { useState } from "react";
import { Service } from "@/types";
import { useCartStore } from "@/lib/store/cart";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/lib/providers/currency-provider";

const SAMPLE_SERVICES: Service[] = [
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
    description: "A relaxing yoga session focusing on mindfulness and flexibility",
    price: 50.00,
    duration: "45 min",
    category: "Wellness",
  },
  {
    id: "3",
    name: "Nutrition Consultation",
    description: "A personalized nutrition plan from a certified dietitian",
    price: 90.00,
    duration: "30 min",
    category: "Health",
  },
  {
    id: "4",
    name: "Massage Therapy",
    description: "A rejuvenating deep-tissue massage to relieve stress",
    price: 100.00,
    duration: "60 min",
    category: "Wellness",
  },
  {
    id: "5",
    name: "Web Development Bootcamp",
    description: "An intensive full-stack web development training",
    price: 500.00,
    duration: "6 weeks",
    category: "Education",
  },
  {
    id: "6",
    name: "Photography Workshop",
    description: "A hands-on class to enhance your photography skills",
    price: 120.00,
    duration: "3 hours",
    category: "Creativity",
  },
  {
    id: "7",
    name: "Music Lessons (Guitar)",
    description: "Beginner to advanced guitar lessons with a professional tutor",
    price: 60.00,
    duration: "45 min",
    category: "Music",
  },
  {
    id: "8",
    name: "Language Tutoring (Spanish)",
    description: "Private Spanish language lessons from a native speaker",
    price: 40.00,
    duration: "60 min",
    category: "Education",
  },
  {
    id: "9",
    name: "Home Cleaning Service",
    description: "Professional deep cleaning for your home or office",
    price: 150.00,
    duration: "2 hours",
    category: "Home Services",
  },
  {
    id: "10",
    name: "Car Detailing",
    description: "A thorough cleaning and detailing service for your vehicle",
    price: 200.00,
    duration: "3 hours",
    category: "Automotive",
  },
  {
    id: "11",
    name: "Career Coaching",
    description: "Personalized career guidance and resume building",
    price: 80.00,
    duration: "45 min",
    category: "Professional Development",
  },
  {
    id: "12",
    name: "Custom Portrait Painting",
    description: "A hand-painted portrait by a professional artist",
    price: 300.00,
    duration: "Varies",
    category: "Creativity",
  },
   {
    id: "13",
    name: "High-Intensity Interval Training (HIIT)",
    description: "A fast-paced workout to boost endurance and burn calories",
    price: 65.00,
    duration: "45 min",
    category: "Fitness",
  },
  {
    id: "14",
    name: "Strength & Conditioning Program",
    description: "A structured program focusing on strength and muscle gain",
    price: 80.00,
    duration: "60 min",
    category: "Fitness",
  },

];

export const ServiceList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Fitness");
  const { addItem } = useCartStore();
const { currency, convertCurrency } = useCurrency();

const formatPrice = (price: number) => {
  const convertedPrice = convertCurrency(price, 'USD', currency);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(convertedPrice);
};


  const filteredServices = SAMPLE_SERVICES.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(SAMPLE_SERVICES.map(s => s.category)));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(
                selectedCategory === category ? "" : category
              )}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredServices.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="font-semibold">
                   {formatPrice(service.price)}
                </span>
                <span className="text-sm text-muted-foreground">
                  {service.duration}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => addItem(service)}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
