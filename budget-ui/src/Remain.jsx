import { AppContext } from "./context/AppContext";
import { useContext } from "react";

const Remain = () => {
    const { expense, budget } = useContext(AppContext);
    const total = expense.reduce((total, item) => {
        return total = total + parseInt(item.cost);
    }, 0);
    const remain = budget - total;

    return (
        <div 
        className={`w-full lg:flex-1 my-4 sm:my-6 py-6 px-4 sm:px-6 rounded-lg border ${remain < 0 ? "bg-red-200 border-red-400 text-red-900" : "bg-green-200 border-green-400 text-green-900"}`}>
            <p className="text-sm sm:text-base font-medium">Remaining: Rs {remain}</p>
        </div>
    );
};

export default Remain;