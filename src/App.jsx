import { Navbars } from "./components/navbar/Navbars";
import { Router, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import Pages from "./pages/Pages";
import i18next from "i18next";
import HomePage from "./pages/HomePage";
import AppLayout from "./layout/AppLayout";
const App = () => {
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <>
      <Routes>
        
        <Route element={<AppLayout onChange = {handleClick} />}>
        <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<Account  />} />
          <Route path="/page" element={<Pages />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
