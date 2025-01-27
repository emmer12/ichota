import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MainLayout from "./layouts/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
