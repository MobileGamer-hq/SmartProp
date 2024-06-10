export const sizes = {
  FONT_TITLE: 50,
  FONT_MAX: 25,
  FONT_MID: 15,
  FONT_MIN: 11,

  SPACES_MAX: 50,
  SPACES_MID: 25,
  SPACES_MIN: 10,

  MAX: 50,
  MID: 25,
  MIN: 10,

  PADDING_MAX: 10,
  PADDING_MID: 7.5,
  PADDING_MIN: 5,

  MARGIN_MAX: 15,
  MARGIN_MID: 10,
  MARGIN_MIN: 5,

  BUTTON_WIDTH: 75,

};

export const colors = {
  primary: "#004AAD",
  secondary: "#737373",
  tertiary: "#000000",
  bg: "#FAF9F9",
  text: "black",
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
    phone_number: "",
    address: "",
  },
  verification: {
    NIN: "",
    BVN: "",
  },
};

export const Property = {
  location: "",
  id: "",
  price: 0,
  colors: [],
  images: [],
  type: "",
  size: {
    squ_foot: 0,
    lot_size: 0,
  },
  rooms: {
    bedrooms: 0,
    kitchen: 0,
    living_room: 0,
  },
  verification: {
    verified: false,
    documents: [],
    verification_date: "",
  },
  miscellaneous: [],
  amenities: {
    pool: false,
    gym: false,
    garage: false,
    laundry_room: false,
  },
  legal_description: "",
  note: "",
  point: 0
};

export const Search = {
  budget: 0,
  property_type: "",
  bedroom_number: 0,
  bathroom_number: 0,
  inside_estate: false,
  square_footage: 0,
  location: "",
  amenities: [],
  results: []
}

//Types of users
export const Seller = {
  properties: [],
  ads: [],
  rank: "",
  followers: [],
  rating: ""
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
  suggested: []
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
    {label: "Buyer", value: "buyer"},
    {label: "Seller", value: "seller"},
  ],

  property_type: [
    {label: "Flats", value: "flats"},
    {label: "Duplex", value: "duplex"},
    {label: "Mansion", value: "mansion"},
    {label: "Three Story Buiilding", value: "3-story"}
  ],

  boolean: [
    {label: "True", value: "true"},
    {label: "False", value: "false"},
  ],

  purpose: [
    {label: "Are you looking for a place to call home", value: "true"},
    {label: "Are you looking for, to resell", value: "true"},
    {label: "Are you looking for a rental property", value: "true"},
    {label: "Are you looking for investment", value: "true"},
  ]

  
}

