
export interface Toy {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
  ageGroup: string;
  isNew?: boolean;
}

// Featured toys data
export const featuredToys: Toy[] = [
  {
    id: "ft1",
    name: "Educational Building Blocks",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
    category: "Educational",
    quantity: 150,
    ageGroup: "3-5 years",
    isNew: true
  },
  {
    id: "ft2",
    name: "Dinosaur Action Figure Set",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d",
    category: "Action Figures",
    quantity: 75,
    ageGroup: "6-8 years"
  },
  {
    id: "ft3",
    name: "Plush Teddy Bear",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1563396983906-b3795482a59a",
    category: "Soft Toys",
    quantity: 200,
    ageGroup: "0-2 years"
  },
  {
    id: "ft4",
    name: "Science Experiment Kit",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    category: "Educational",
    quantity: 50,
    ageGroup: "9-11 years",
    isNew: true
  }
];

// Best seller toys data
export const bestSellerToys: Toy[] = [
  {
    id: "bs1",
    name: "Super Deluxe Board Game",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09",
    category: "Board Games",
    quantity: 85,
    ageGroup: "6-8 years"
  },
  {
    id: "bs2",
    name: "Remote Control Car",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f",
    category: "Remote Control",
    quantity: 40,
    ageGroup: "9-11 years"
  },
  {
    id: "bs3",
    name: "Wooden Train Set",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
    category: "Educational",
    quantity: 120,
    ageGroup: "3-5 years"
  },
  {
    id: "bs4",
    name: "Colorful Play Dough Set",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1560506840-ec148e82a604",
    category: "Arts & Crafts",
    quantity: 180,
    ageGroup: "3-5 years"
  }
];

// All toys data (combines featured, bestsellers, and more)
export const allToys: Toy[] = [
  ...featuredToys,
  ...bestSellerToys,
  {
    id: "t1",
    name: "Musical Xylophone",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1553467087-6444a3d562ed",
    category: "Musical Instruments",
    quantity: 65,
    ageGroup: "3-5 years"
  },
  {
    id: "t2",
    name: "Superhero Costume Set",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622",
    category: "Costumes",
    quantity: 55,
    ageGroup: "6-8 years",
    isNew: true
  },
  {
    id: "t3",
    name: "Outdoor Adventure Set",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1598541439271-d1c4d88f2878",
    category: "Outdoor",
    quantity: 30,
    ageGroup: "9-11 years"
  },
  {
    id: "t4",
    name: "Interactive Storybook",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1598620617238-a14453baca6b",
    category: "Educational",
    quantity: 90,
    ageGroup: "3-5 years"
  },
  {
    id: "t5",
    name: "Baby's First Blocks",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1596744414543-65221376fab3",
    category: "Educational",
    quantity: 110,
    ageGroup: "0-2 years"
  },
  {
    id: "t6",
    name: "STEM Building Kit",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60",
    category: "STEM",
    quantity: 45,
    ageGroup: "9-11 years"
  }
];
