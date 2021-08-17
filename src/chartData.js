import { useContext } from "react";
import { TrackerContext } from "./store/context";
import { incomeCatg, expenseCatg, resetCategories, } from "./components/categoryTypes";


const useTransactions = (title) => {
  resetCategories();
  const  { transactions } = useContext(TrackerContext);
  const catType  = transactions.filter((trans)=> trans.type === title);
  const sum = catType.reduce((accum,val)=> (accum+=val.amount),0);
  const categories = (title) === 'Income'? incomeCatg : expenseCatg;

  catType.forEach(trans => {
    const catg = categories.find((cat)=> cat.type === trans.category)
    if(catg) {
      catg.amount += trans.amount;
    }
  })
  const filterCatgs = categories.filter(ct => ct.amount > 0);

  const chartsData = {
    datasets: [ {
      data: filterCatgs.map(c => c.amount),
      backgroundColor: filterCatgs.map(c => c.color)
    }],
    labels: filterCatgs.map((c) => c.type),
  }
  return {filterCatgs, sum, chartsData};
}
export default useTransactions;
