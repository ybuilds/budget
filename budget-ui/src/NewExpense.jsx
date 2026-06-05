const NewExpense = () => {
    return (
        <div className="w-full">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">Add Expense</h1>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 py-2">
                <div className="flex-1">
                    <p className="text-sm font-medium mb-2">Name</p>
                    <input 
                        type="text" 
                        className="border border-gray-400 rounded px-3 py-2 w-full outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" 
                        placeholder="Enter expense name"
                    />
                </div>
                <div className="flex-1">
                    <p className="text-sm font-medium mb-2">Cost</p>
                    <input 
                        type="text" 
                        className="border border-gray-400 rounded px-3 py-2 w-full outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" 
                        placeholder="Enter cost"
                    />
                </div>
            </div>
            <button className="w-full sm:w-auto rounded bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 cursor-pointer transition font-medium">Save</button>
        </div>
    );
};

export default NewExpense;