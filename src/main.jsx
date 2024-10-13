import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./pages/index/Index.jsx";
import Quiz from "./pages/quiz/Quiz.jsx";
import "./main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path={"/quiz"} element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
);
