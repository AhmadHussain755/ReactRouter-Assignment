import Form from "../components/form/index";
import Card from "../components/card/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}
