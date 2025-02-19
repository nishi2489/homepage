"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Service from "@/components/Service";
import Recruitment from "@/components/Recruitment";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Tabs defaultValue="service" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="service">サービス</TabsTrigger>
          <TabsTrigger value="recruitment">採用情報</TabsTrigger>
        </TabsList>
        <TabsContent value="service">
          <Service />
        </TabsContent>
        <TabsContent value="recruitment">
          <Recruitment />
        </TabsContent>
      </Tabs>
    </main>
  );
} 