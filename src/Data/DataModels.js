export const sizes = {
  FONT_MAX: 50,
  FONT_MID: 25,
  FONT_MIN: 10,

  SPACES_MAX: 50,
  SPACES_MID: 25,
  SPACES_MIN: 10,

  MAX: 50,
  MID: 25,
  MIN: 10,

  PADDING_MAX: 10,
  PADDING_MID: 10,
  PADDING_MIN: 10,

  MARGIN_MAX: 10,
  MARGIN_MID: 10,
  MARGIN_MIN: 10,
};

export const colors = {
  primary: "#004AAD",
  secondary: "#737373",
  tertiary: "#000000",
  bg: "#FAF9F9",
  text: "black",
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
  colors: [],
  images: [],
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
  legal_description: "",
  note: "",
};

export const Search = {
  property_type: "",
  bedroom_number: 0,
  inside_estate: false,
  square_footage: 0,

}

//Types of users
export const Seller = {
  properties: [],
  ads: [],
  rank: "",
  followers: [],
};
export const Buyer = {
  watchlist: [],
  following: [],
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
  ]
}

const priority = {
  
}