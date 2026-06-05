import { useState } from "react";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const NewExpense = () => {
    const [name, setName] = useState("");
    const [cost, setCost] = useState(0);

    const { dispatch } = useContext(AppContext);

    const submitExpense = (e) => {
        e.preventDefault();
        const expense = {id: uuidv4(), name: name, cost: parseInt(cost)};
        dispatch({
            type: "addExpense",
            payload: expense
        });
    }

    return (
        <div className="w-full">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">Add Expense</h1>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 py-2">
                <div className="flex-1">
                    <p className="text-sm font-medium mb-2">Name</p>
                    <input type="text" name="name" className="border border-gray-400 rounded px-3 py-2 w-full outline-none transition" onChange={(e) => setName(e.target.value)} placeholder="Enter expense name"/>
                </div>
                <div className="flex-1">
                    <p className="text-sm font-medium mb-2">Cost</p>
                    <input type="number" name="cost" className="border border-gray-400 rounded px-3 py-2 w-full outline-none transition" onChange={(e) => setCost(e.target.value)} placeholder="Enter cost"/>
                </div>
            </div>
            <button className="w-full sm:w-auto rounded bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 cursor-pointer transition font-medium" onClick={submitExpense}>Save</button>
        </div>
    );
};

export default NewExpense;