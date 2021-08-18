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
    address: {
      street: "",
      extNumber: "",
      intNumber: "",
      zipcode: "",
      state: "",
    },
    price: {
      askingPrice: 123,
      currency: "M",
    },
    size: {
      lotSize: 123,
      constructionSize: 123,
    },
    type: "Apartment",
  },
];
