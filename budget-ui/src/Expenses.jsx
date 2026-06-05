import Expense from "./Expense";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const Expenses = () => {
    const { expense } = useContext(AppContext);

    return (
        <div className="w-full">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">Expenses</h1>

            <input type="text" name="search" className="border border-gray-400 rounded px-3 py-2 my-4 w-full outline-none transition" placeholder="Type to search..."/>

            <div className="border border-gray-400 rounded max-h-64 sm:max-h-96 overflow-y-auto mb-6">
                {expense.map(e => <Expense key={e.id} id={e.id} name={e.name} cost={e.cost}/>)}
            </div>
        </div>
    );
};

export default Expenses;