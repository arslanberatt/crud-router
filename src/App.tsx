import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeList from "./components/HomeList";
import HomeDetail from "./components/HomeDetail";
import HomeForm from "./components/HomeForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeList />} />
          <Route path="/homes/:id" element={<HomeDetail />} />
          <Route path="/homes/new" element={<HomeForm />} />
          <Route path="/homes/:id/edit" element={<HomeForm isEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
