import DashboardLayout from "./layouts/dashboard";
import DelegateLayout from "./layouts/Delegate";
// import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardLayout />} />
        <Route path="/delegate" element={<DelegateLayout />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  // <a href="http://localhost:3000/dashboard">Hellow</a>
  );
}
// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
