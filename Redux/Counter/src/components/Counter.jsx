import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/features/CounterSlice";

export const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="countersec py-10 h-screen">
            <div className="container mx-auto flex justify-center items-center h-full">
                <div className="counterbox w-1/2 mx-auto p-5 bg-white shadow-2xl rounded-lg text-center">
                    <h1 className="text-4xl font-semibold mb-5">Counter</h1>
                    <p className="text-2xl mb-5">{count}</p>
                    <div className="counterbtns">
                        <ul className="flex flex-row flex-nowrap gap-5 justify-center">
                            <li><button className="py-2 px-5 text-md font-normal tracking-wide rounded bg-[var(--color-Blue)]" onClick={() => dispatch(increment())}>Increment</button></li>
                            <li><button className="py-2 px-5 text-md font-normal tracking-wide rounded bg-[var(--color-green)]" onClick={() => dispatch(decrement())}>Decrement</button></li>
                            <li><button className="py-2 px-5 text-md font-normal tracking-wide rounded bg-[var(--color-orange)]" onClick={() => dispatch(reset() )}>Reset</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}