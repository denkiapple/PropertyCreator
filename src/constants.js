export const classes = (...classList) => classList.filter(c => c).join("  ");

export const PROPERTY_TYPES = [
  {
    id: 1,
    name: "House",
  },
  {
    id: 2,
    name: "Apartment",
  },
];

export const properties = [
  {
    id: 1,
    type: 1,
    address: {
      street: "Baker Street",
      extNumber: "221B",
      intNumber: "2",
      zipcode: "NW1",
      city: "London",
      state: "United Kingdom",
    },
    areas: {
      lotSize: 210,
      constructionSize: 120,
      sharedSpaces: 20,
    },
    characteristics: {
      rooms: 3,
      bathrooms: 2,
      parkingSpaces: 1,
    },
    amenities: {
      petsAllowed: true,
      includesMaintenance: false,
    },
    price: {
      askingPrice: 4000,
      currency: "GBP",
    },
  },
];
