import { TiDelete } from "react-icons/ti";

const Expense = ({name, cost}) => {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between p-3 sm:p-4 border-b border-gray-400 last:border-b-0 gap-2">
            <p className="text-sm sm:text-base font-medium">{name}</p>
            <div className="flex items-center gap-2">
                <p className="px-3 py-1 sm:px-4 border rounded-xl bg-blue-600 text-xs sm:text-sm text-white font-semibold whitespace-nowrap">Rs {cost}</p>
                <button className="text-lg sm:text-xl cursor-pointer hover:text-red-600 transition"><TiDelete/></button>
            </div>
        </div>
    );
};

export default Expense;