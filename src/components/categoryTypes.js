

export const incomeCatg = [
  { type: 'Business', amount: 0, icon:require("../assets/business.png"),color: '#123123' },
  { type: 'Investments', amount: 0, icon:require("../assets/investment.jpeg"), color: '#14915f', },
  { type: 'Deposits', amount: 0,icon:require("../assets/deposit.png"), color: '#165f40' },
  { type: 'Gifts', amount: 0,icon:require("../assets/gifts.png"), color: '#10ac6e' },
  { type: 'Salary', amount: 0,icon:require("../assets/salary.png"), color:  '#0bc77e' },
  { type: 'Rental income', amount: 0,icon:require("../assets/Rent.png"), color: '#04e38d' },
];

export const expenseCatg = [
  {
    type: "Education",
    amount: 0,
    icon: require("../assets/education.png"),
    color: "#A95EC2",
  },
  {
    type: "Healthcare",
    amount: 0,
    icon: require("../assets/healthcare.png"),
    color: "#FF768A",
  },
  {
    type: "Shopping",
    amount: 0,
    icon: require("../assets/shopping.png"),
    color: "#EC60AB",
  },
  {
    type: "Food",
    amount: 0,
    icon: require("../assets/food.png"),
    color: "#FF9E6D",
  },
  { type: 'Phone', amount: 0,icon: require("../assets/phone.png"), color: '#cc474b' },
  { type: 'Pets', amount: 0, icon: require("../assets/pets.png"),color: '#f55b5f' },
  {
    type: "Other",
    amount: 0,
    icon: require("../assets/entertainment.png"),
    color: "#FFCB5E",
  }

];

export const resetCategories = () => {
  incomeCatg.forEach((c) => c.amount = 0);
  expenseCatg.forEach((c) => c.amount = 0);
};