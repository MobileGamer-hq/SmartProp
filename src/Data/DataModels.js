export const sizes = {
  FONT_TITLE: 80,
  FONT_MAX: 35,
  FONT_MID: 20,
  FONT_MIN: 15,

  SPACES_MAX: 50,
  SPACES_MID: 25,
  SPACES_MIN: 10,

  MAX: 50,
  MID: 20,
  MIN: 10,

  PADDING_MAX: 10,
  PADDING_MID: 7.5,
  PADDING_MIN: 5,

  MARGIN_MAX: 15,
  MARGIN_MID: 10,
  MARGIN_MIN: 5,

  BUTTON_WIDTH_SMALL: 150,
  BUTTON_WIDTH_MEDIUM: 300,

  BUTTON_HEIGHT_LARGE: 45,
  BUTTON_HEIGHT_MEDIUM: 35,
  BUTTON_HEIGHT_SMALL: 30,

  BUTTON_FONT_LARGE: 25,
  BUTTON_FONT_MEDIUM: 18,
  BUTTON_FONT_SMALL: 15,

  HEADER_BAR: 60,
};

export const colors = {
  primary: "#004AAD",
  primary_hover: "#00367F",
  primary_light: "#006DFF",
  secondary: "#FFFFFF",
  tertiary: "#070707",
  bg: "#FFFFFF",
  text: "#070707",
  text2: "white",
  text3: "grey",
};

//Data Models
export const User = {
  username: "",
  profile_picture: "",
  id: "",
  login: {
    email: "",
    password: "",
  },
  role: "",
  roleData: {},
  contact_info: {
    contact_phone_number: "",
    contact_email: "",
    address: "",
  },
  verification: {
    NIN: "",
    BVN: "",
    phone_number: "",
  },
};

export const Property = {
  id: "",
  seller: "",
  price: 0,
  type: "",
  description: {
    colors: [],
    pictures: [],
    tags: [],
  },
  verification: {
    verified: false,
    documents: [],
    verification_date: "",
  },
  legal_description: "",
  location: {
    address: "",
    city: "",
    state: "",
    zip: "",
    inside_estate: false,
    estate: "",
  },
  size: {
    squ_foot: 0,
    lot_size: 0,
    floors: 0,
  },
  rooms: {
    bedrooms: 0,
    bathrooms: 0,
    kitchen: 0,
    living_room: 0,
  },
  miscellaneous: [],
  amenities: {
    pool: false,
    gym: false,
    garage: false,
    laundry_room: false,
  },
  offers: [],
  note: "",
};

export const Search = {
  search_term: "",
  filter: {},
  results: [],
};

export const Search_Filter = {
  budget: 0,
  property_type: "Any",
  bedrooms: 1,
  bathrooms: 1,
  kitchens: 1,
  living_rooms: 1,

  inside_estate: false,
  smart_home: true,
  square_footage: 0,
  city: "",
  state: "",
  estate: "",

  amenities: [],
};

export const Search_Priority = {
  price: 5,
  bedroom_no: 4,
  bathroom_no: 4,
  living_room_no: 3,
  kitchen_no: 2,
  square_footage: 4,

  property_type: 5,
  location: 4,
  inside_estate: 5,
  amenities: 3,
};

//Types of users
export const Seller = {
  properties: [],
  ads: [],
  rank: "",
  followers: [],
  rating: "",
};

export const Buyer = {
  watchlist: [],
  viewed_properties: [],
  following: [],
  priority: {
    price: 0,
    bedroom_no: 0,
    bathroom_no: 0,
    square_footage: 0,
    inside_estate: 0,
    property_type: 5,
    location: 0,
    amenities: 0,
  },
  search_filter: {},
  suggested: [],
};

export const Admin = {};

//
export const Transaction = {
  id: "",
  propety: "",
  seller: "",
  buyer: "",
  purchase_price: 0,
  date: "",
  time: "",
  payment: {
    plan: "",
    plan_data: {
      start_date: "",
      end_date: "",
      start_amount: "",
      loan: {
        loan_amount: 0,
        loan_type: "",
      },
    },
  },
  sales: {},
};
export const advertisement = {};

export const documents = {
  id: "",
  type: "",
  details: [],
  path: "",
};

//
export const dropdown_options = {
  user_role: [
    { label: "Buyer", value: "buyer" },
    { label: "Seller", value: "seller" },
  ],

  property_type: [
    { label: "Flats", value: "flats" },
    { label: "Duplex", value: "duplex" },
    { label: "Mansion", value: "mansion" },
    { label: "Three Story Buiilding", value: "3-story" },
  ],

  boolean: [
    { label: "True", value: "true" },
    { label: "False", value: "false" },
  ],

  purpose: [
    { label: "Are you looking for a place to call home", value: "true" },
    { label: "Are you looking for, to resell", value: "true" },
    { label: "Are you looking for a rental property", value: "true" },
    { label: "Are you looking for investment", value: "true" },
  ],
};

export const amenities = [
  "Swimming Pool",
  "Gym",
  "Home Office",
  "Security System",
  "Gated Community Access",
  "High-Speed Internet",
  "Backup Generator",
  "Solar Power",
  "Smart Home Automation",
  "Water Filtration System",
  "Outdoor Kitchen",
  "Fire Pit",
  "Walk-in Closets",
  "Home Theater",
  "Wine Cellar",
  "In-Unit Laundry",
  "Heated Floors",
  "Sauna",
  "Jacuzzi",
  "Balcony",
  "Garden",
  "Game Room",
  "Elevator",
  "Private Rooftop Access",
  "Air Conditioning",
  "Fireplace",
  "Guest House",
  "Library",
  "Tennis Court",
  "Pool",
  "Spa",
  "Outdoor Shower",
  "Fitness Center",
  "Basketball Court",
  "Barbecue Area",
  "Pet Friendly",
  "Children's Play Area",
  "Clubhouse",
  "Concierge",
  "Storage",
  "Waterfront",
  "Private Beach",
  "Private Island",
  "Private Jetty",
  "Fully Furnished",
  "Partially Furnished",
  "Unfurnished",
  "Furnished",
];