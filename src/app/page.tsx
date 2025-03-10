// app/page.tsx
"use client"; 
// ↑ もしサーバーコンポーネントではなく、クライアントサイドの動きをしたい場合に指定

import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1>テスト表示</h1>
    </main>
  );
}
