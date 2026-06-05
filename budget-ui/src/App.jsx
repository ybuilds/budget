import Budget from "./Budget";
import Expenses from "./Expenses";
import NewExpense from "./NewExpense";
import Remain from "./Remain";
import Spent from "./Spent";

const App = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">My Budget Planner</h1>

            <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
                <Budget/>
                <Remain/>
                <Spent/>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <Expenses/>
                <NewExpense/>
            </div>
        </div>
    );
};

export default App;