import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aside from "./component/Aside";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";

function App() {
  return (
    <BrowserRouter>
      <main className="h-full">
        <Aside />
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/login" Component={Login} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
