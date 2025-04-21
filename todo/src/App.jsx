import { ToastContainer } from "react-toastify";

import { Addtask } from "./_components/organisms/addtask/Addtask";

const App = () => {
    return (
        <>
            <Addtask />
            <ToastContainer />
        </>
    )
}

export default App