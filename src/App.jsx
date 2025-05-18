import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SomeText from "./sometext/SomeText";
import MyCounter from "./mycounter/MyCounter";
import SumNumbers from "./sumNumbers/sumNumbers";
import Form from "./MyInput/MyInput";
const ThemeContext = createContext(null);

function App() {
  const [peopleList, setPeopleList] = useState([
    { id: 1, name: "Jhon" },
    { id: 2, name: "Mary" },
    { id: 3, name: "Peter" },
    { id: 4, name: "Alex" },
    { id: 5, name: "Doe" },
    { id: 6, name: "Mark" },
  ]);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [titleText] = useState("Hello!");
  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/counter">Счетчик</Link>
            </li>
            <li>
              <Link to="/sum">Сумма чисел</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <button onClick={changeTheme}>Смена темы</button>
            </li>
          </ul>
        </nav>
      </div>
      <ThemeContext.Provider value={localStorage.getItem("theme")}>
        <Routes>
          <Route path="/counter" element={<MyCounter />} />
          <Route path="/sum" element={<SumNumbers />} />
          <Route path="/todo" element={<Form />} />
          <Route
            path="/"
            element={<SomeText title={titleText} className={theme} />}
          />
        </Routes>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
