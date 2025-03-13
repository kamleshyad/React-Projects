import { BrowserRouter } from "react-router-dom";
import { DefineRoutes } from "./DefineRoutes";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <DefineRoutes />
    </BrowserRouter>
  )
}

export default App