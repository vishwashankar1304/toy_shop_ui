
export interface Offer {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: string;
  expiryDate: string;
  isLimited: boolean;
  minOrder: number;
}

export const offers: Offer[] = [
  {
    id: "o1",
    title: "Summer Clearance Sale",
    description: "Get huge discounts on all outdoor toys and games for the summer season.",
    image: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24",
    discount: "25% OFF",
    expiryDate: "2025-08-31",
    isLimited: true,
    minOrder: 50
  },
  {
    id: "o2",
    title: "Educational Toys Bundle",
    description: "Special pricing on our educational toys collection when you purchase in bulk.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b",
    discount: "20% OFF",
    expiryDate: "2025-09-15",
    isLimited: false,
    minOrder: 100
  },
  {
    id: "o3",
    title: "New Account Discount",
    description: "Sign up as a new wholesaler and get a special discount on your first order.",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae",
    discount: "15% OFF",
    expiryDate: "2025-12-31",
    isLimited: false,
    minOrder: 30
  },
  {
    id: "o4",
    title: "Holiday Season Pre-Order",
    description: "Pre-order our holiday collection and secure inventory before the rush.",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383",
    discount: "Free Shipping",
    expiryDate: "2025-10-15",
    isLimited: true,
    minOrder: 200
  },
  {
    id: "o5",
    title: "Volume Discount - Action Figures",
    description: "Special tiered pricing for bulk orders of our action figure collections.",
    image: "https://images.unsplash.com/photo-1611848043787-d3051fa70125",
    discount: "Up to 30% OFF",
    expiryDate: "2025-07-31",
    isLimited: false,
    minOrder: 150
  },
  {
    id: "o6",
    title: "Back to School Promotion",
    description: "Educational toys and games at special wholesale prices for back to school.",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33",
    discount: "Buy 2, Get 1 Free",
    expiryDate: "2025-09-30",
    isLimited: false,
    minOrder: 75
  }
];
