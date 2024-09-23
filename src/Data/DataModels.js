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
  name: "",
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
    title: '',
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
  colors_matter: false,

  square_footage: 0,
  city: "",
  state: "",
  estate: "",

  colors: [],
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

export const listOfColors  = [
  { color: "White", code: "#FFFFFF" },
  { color: "Gray", code: "#808080" },
  { color: "Beige", code: "#F5F5DC" },
  { color: "Cream", code: "#FFFDD0" },
  { color: "Light Blue", code: "#ADD8E6" },
  { color: "Navy Blue", code: "#000080" },
  { color: "Brown", code: "#8B4513" },
  { color: "Olive Green", code: "#808000" },
  { color: "Sage Green", code: "#B2AC88" },
  { color: "Pale Yellow", code: "#FFFFE0" },
  { color: "Terracotta", code: "#E2725B" },
  { color: "Charcoal", code: "#36454F" },
  { color: "Tan", code: "#D2B48C" },
  { color: "Soft Pink", code: "#F4C2C2" },
  { color: "Lavender", code: "#E6E6FA" },
  { color: "Dusty Rose", code: "#DCAE96" },
  { color: "Forest Green", code: "#228B22" },
  { color: "Sky Blue", code: "#87CEEB" },
  { color: "Sandstone", code: "#786D5F" },
  { color: "Light Gray", code: "#D3D3D3" },
  { color: "Brick Red", code: "#CB4154" },
  { color: "Mustard Yellow", code: "#FFDB58" },
  { color: "Mint Green", code: "#98FF98" },
  { color: "Light Taupe", code: "#B38B6D" },
  { color: "Cottage Blue", code: "#5B92E5" },
  { color: "Soft Peach", code: "#FFDAB9" },
  { color: "Warm Beige", code: "#E5C4A1" },
  { color: "Dark Chocolate", code: "#3C1414" },
  { color: "Ocean Blue", code: "#4F42B5" },
  { color: "Teal", code: "#008080" }
];

const test = {
  "White" : "#FFFFFF",
  "Gray": "#808080",
 "Beige": "#F5F5DC",
 "Cream": "#FFFDD0",
 "Light Blue": "#ADD8E6",
 "Navy Blue": "#000080",
 "Brown": "#8B4513",
 "Olive Green": "#808000",
 "Sage Green": "#B2AC88",
 "Pale Yellow": "#FFFFE0",
 "Terracotta": "#E2725B",
 "Charcoal": "#36454F",
 "Tan": "#D2B48C",
 "Soft Pink": "#F4C2C2",
 "Lavender": "#E6E6FA",
 "Dusty Rose": "#DCAE96" ,
 "Forest Green": "#228B22" ,
 "Sky Blue": "#87CEEB" ,
 "Sandstone": "#786D5F" ,
 "Light Gray": "#D3D3D3" ,
 "Brick Red": "#CB4154" ,
 "Mustard Yellow": "#FFDB58" ,
 "Mint Green": "#98FF98" ,
 "Light Taupe": "#B38B6D" ,
 "Cottage Blue": "#5B92E5" ,
 "Soft Peach": "#FFDAB9" ,
 "Warm Beige": "#E5C4A1" ,
 "Dark Chocolate": "#3C1414" ,
 "Ocean Blue": "#4F42B5" ,
 "Teal": "#008080"
};

