import { BrowserRouter } from "react-router-dom";
import { DefineRoutes } from "./DefineRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <DefineRoutes />
    </BrowserRouter>
  )
}

export default App