import { LIST_TRANSACTION, ADD_TRANSACTION } from "../actionTypes";

let initialState = {
  transactions: [
    {
      _id: "5e2ed170389f16ccb8cd4272",
      type: "Credit",
      account: "eiusmod ipsum",
      amount: "$4,399.99",
      date: "01-06-2017",
      description: "pariatur pariatur enim eu"
    },
    {
      _id: "5e2ed17051917d5d4bf83c4e",
      type: "Debit",
      account: "voluptate veniam",
      amount: "$6,368.42",
      date: "20-06-1925",
      description: "irure consequat aliquip magna"
    },
    {
      _id: "5e2ed1701d96081722b24783",
      type: "Credit",
      account: "eu proident",
      amount: "$8,850.51",
      date: "25-11-1907",
      description: "minim velit sit aliquip"
    },
    {
      _id: "5e2ed1700b4280b8c62ad08b",
      type: "Debit",
      account: "exercitation esse",
      amount: "$2,602.21",
      date: "18-04-1994",
      description: "tempor cillum minim veniam"
    },
    {
      _id: "5e2ed170d84a19efcfa9e7bc",
      type: "Credit",
      account: "commodo et",
      amount: "$6,176.47",
      date: "16-12-1987",
      description: "culpa qui pariatur irure"
    },
    {
      _id: "5e2ed17074bbfc80ea5ca879",
      type: "Debit",
      account: "non nostrud",
      amount: "$7,881.18",
      date: "08-01-1956",
      description: "occaecat ipsum labore nulla"
    },
    {
      _id: "5e2ed1700f6bb531cfd7e55b",
      type: "Debit",
      account: "nostrud est",
      amount: "$3,683.74",
      date: "16-08-1928",
      description: "sunt eu cupidatat aute"
    },
    {
      _id: "5e2ed170403b4c304a4c68d6",
      type: "Credit",
      account: "aliquip laboris",
      amount: "$2,613.15",
      date: "06-04-1990",
      description: "eiusmod officia aliquip minim"
    },
    {
      _id: "5e2ed170561d601342dd86b8",
      type: "Credit",
      account: "cupidatat duis",
      amount: "$2,323.25",
      date: "08-05-1962",
      description: "reprehenderit nisi nostrud laborum"
    },
    {
      _id: "5e2ed170abf6c48fcd62afb3",
      type: "Credit",
      account: "ut ea",
      amount: "$4,484.55",
      date: "03-10-1909",
      description: "sit labore qui aliqua"
    }
  ]
};
const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_TRANSACTION: {
      return {
        ...state,
        transactions: [...state.transactions]
      };
    }
    case ADD_TRANSACTION: {
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    }
    default:
      return {
        ...state
      };
  }
};
export default transactionReducer;
