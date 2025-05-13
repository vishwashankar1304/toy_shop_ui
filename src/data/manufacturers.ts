
export interface Manufacturer {
  id: string;
  name: string;
  logo: string;
  country: string;
  productTypes: string[];
  established: number;
}

export const manufacturers: Manufacturer[] = [
  {
    id: "m1",
    name: "PlayTech Toys",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    country: "United States",
    productTypes: ["Educational", "Board Games", "STEM"],
    established: 1985
  },
  {
    id: "m2",
    name: "Kids Wonder",
    logo: "https://images.unsplash.com/photo-1560474544-d3196f9689cc",
    country: "Germany",
    productTypes: ["Action Figures", "Dolls", "Vehicles"],
    established: 1992
  },
  {
    id: "m3",
    name: "Imaginative Play",
    logo: "https://images.unsplash.com/photo-1551817958-20204d6ab212",
    country: "United Kingdom",
    productTypes: ["Soft Toys", "Costumes", "Role Play"],
    established: 1978
  },
  {
    id: "m4",
    name: "Eureka Learning",
    logo: "https://images.unsplash.com/photo-1584658970768-afa0d5adad3c",
    country: "France",
    productTypes: ["Educational", "STEM", "Musical Instruments"],
    established: 2001
  },
  {
    id: "m5",
    name: "Global Toys Inc.",
    logo: "https://images.unsplash.com/photo-1617791160536-598cf32026fb",
    country: "Canada",
    productTypes: ["Outdoor", "Sports", "Adventure"],
    established: 1989
  },
  {
    id: "m6",
    name: "Little Creators",
    logo: "https://images.unsplash.com/photo-1561758033-d89a9ad46330",
    country: "Japan",
    productTypes: ["Arts & Crafts", "Building Blocks", "Creative Play"],
    established: 2005
  }
];
