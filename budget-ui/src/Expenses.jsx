import Expense from "./Expense";

const Expenses = () => {
    const expenses = [
        {id: 1, name: "Shopping", cost: "100"},
        {id: 2, name: "Holiday", cost: "200"},
        {id: 3, name: "Healthcare", cost: "500"},
        {id: 4, name: "Food", cost: "200"},
    ];

    return (
        <div className="w-full">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">Expenses</h1>

            <input 
                type="text" 
                className="border border-gray-400 rounded px-3 py-2 my-4 w-full outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" 
                placeholder="Type to search..."
            />

            <div className="border border-gray-400 rounded max-h-64 sm:max-h-96 overflow-y-auto mb-6">
                {expenses.map(e => <Expense key={e.id} name={e.name} cost={e.cost}/>)}
            </div>
        </div>
    );
};

export default Expenses;