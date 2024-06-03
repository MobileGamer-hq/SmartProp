export const sizes = {
  font: {
    MAX: 50,
    MID: 25,
    MIN: 10,
  },

  spaces: {
    MAX: 50,
    MID: 25,
    MIN: 10,
  },

  MAX: 50,
  MID: 25,
  MIN: 10,
};

export const User = {
  username: "",
  id: "",
  login: {
    email: "",
    password: "",
  },
  role: "",
  roleData: {},
  contact_info:{
    phone_number:"",
    address:"",

  },
  verification:{
    NIN:"",
    BVN:"",
    

  }
};

export const Property = {
  location: "",
  id: "",
  colors: [],
  size: {
    width: 0,
    length: 0,
  },
  bedrooms: "",
  note: "",
};

//Types of users
export const Seller = {
    properties: [],
    ads: [],
    rank: "",
    followers: []



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
    amount_paid: 0,
    date: "",
    time: "",
    paid: false,
};
export const advertisement = {};


