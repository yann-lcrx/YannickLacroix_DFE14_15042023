import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const Form = lazy(() => import("./pages/Form"));
const List = lazy(() => import("./pages/List"));

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/employee-list" element={<List />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
