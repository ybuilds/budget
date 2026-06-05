import { AppContext } from "./context/AppContext";
import { useContext } from "react";

const Spent = () => {
    const { budget, expense } = useContext(AppContext);
    const spent = expense.reduce((spent, item) => (spent += parseInt(item.cost)), 0);

    return (
        <div className="w-full lg:flex-1 my-4 sm:my-6 py-6 px-4 sm:px-6 bg-blue-200 border border-blue-400 rounded-lg text-blue-900">
            <p className="text-sm sm:text-base font-medium">Spent so far: Rs {spent}</p>
        </div>
    );
};

export default Spent;