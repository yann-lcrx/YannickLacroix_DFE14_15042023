import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./pages/Form";
import List from "./pages/List";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/employee-list" element={<List />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
