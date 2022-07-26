import Home from "./routes/Home";
import Detail from "./routes/Detail"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return <Router>
    <Routes>
      <Route path="/ReactJS-Movie-App/movie/:id" element={<Detail/>}></Route>
      <Route path="/ReactJS-Movie-App/" element={<Home/>}>
      </Route>
    </Routes>
  </Router>
}
export default App;