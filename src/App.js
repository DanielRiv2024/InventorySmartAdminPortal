import HomeView from "./Pages/homeView";
import SingInView from "./Pages/signInView";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SingInView />} />
        <Route path="/home" element={<HomeView />} />
      </Routes>
    </div>
  );
}

export default App;
