import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Departments from "./Departments";
import Details from "./Details";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

          <Route path="/college" element={<College />}>
            <Route path="student" element={<Student />} />
            <Route path="departments" element={<Departments />} />
            <Route path="details" element={<Details />} />
          </Route>

          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />

          <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;