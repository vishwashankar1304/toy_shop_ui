
export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "cat1",
    name: "Educational",
    image: "https://images.unsplash.com/photo-1588687848228-6dbb4f03ea0d",
    count: 45
  },
  {
    id: "cat2",
    name: "Action Figures",
    image: "https://images.unsplash.com/photo-1558507334-57300f59f0bd",
    count: 32
  },
  {
    id: "cat3",
    name: "Soft Toys",
    image: "https://images.unsplash.com/photo-1563396983906-b3795482a59a",
    count: 28
  },
  {
    id: "cat4",
    name: "Board Games",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09",
    count: 20
  },
  {
    id: "cat5",
    name: "Outdoor",
    image: "https://images.unsplash.com/photo-1598541439271-d1c4d88f2878",
    count: 18
  },
  {
    id: "cat6",
    name: "Arts & Crafts",
    image: "https://images.unsplash.com/photo-1560506840-ec148e82a604",
    count: 25
  }
];
