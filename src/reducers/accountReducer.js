import { ADD_ACCOUNT } from "../actionTypes";

let initialState = {
  accounts: [
    {
      _id: "5e2ee2ae7f0ca642f9be9b61",
      name: "Amit's Wallet",
      group: "Cash",
      balance: "13,707.54",
      note: "officia in"
    },
    {
      _id: "5e2ee2ae240025a334786176",
      name: "Union Bank Of India (4722)",
      group: "Bank Account",
      balance: "8,513.56",
      note: "occaecat occaecat"
    },
    {
      _id: "5e2ee2aefb825c5e0617533e",
      name: "Mihir's Wallet",
      group: "Cash",
      balance: "11,147.90",
      note: "dolore exercitation"
    },
    {
      _id: "5e2ee2ae493619ef28f47fe0",
      name: "State Bank Of India (7815)",
      group: "Bank Account",
      balance: "4,316.58",
      note: "ea elit"
    },
    {
      _id: "5e2ee2aebb7de2bcb7f7ae3d",
      name: "Axis Bank (1056)",
      group: "Bank Account",
      balance: "6,404.25",
      note: "minim et"
    }
  ]
};
const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT: {
      return {
        ...state,
        accounts: [...state.accounts, action.payload]
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default accountReducer;
