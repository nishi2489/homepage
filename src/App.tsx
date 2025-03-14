// ◆ ファイルパス: src/App.tsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// お使いのページコンポーネント
import Index from "./pages/Index";
import Contact from "./pages/Contact";

// ここが問題行：元は "../styles/globals.css" などになっていたかもしれません。
// 実際には「src/app/globals.css」にあるなら、下記のように書き換えるとOKです。
import "./app/globals.css";

// React Query のクライアント作成
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* ルートはお好みで */}
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
