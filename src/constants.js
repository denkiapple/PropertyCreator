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
  {
    id: 3,
    name: "Lot",
  },
];

export const properties = [
  {
    id: 1,
    type: 1,
    address: {
      street: "",
      extNumber: "",
      intNumber: "",
      zipcode: "",
      city: "",
      state: "",
    },
    areas: {
      lotSize: 0,
      constructionSize: 0,
      sharedSpaces: 0,
    },
    characteristics: {
      rooms: 0,
      bathrooms: 0,
      parkingSpaces: 0,
    },
    amenities: {
      petsAllowed: false,
      includesMaintenance: false,
    },
    price: {
      askingPrice: 123,
      currency: "M",
    },
    type: "Apartment",
  },
];
