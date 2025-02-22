"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../src/components/ui/tabs";
import { ServicesTab } from "../src/components/tabs/ServicesTab";
import { RecruitTab } from "../src/components/tabs/RecruitTab";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="bg-white">
        <div className="pt-[60px]">
          <Tabs defaultValue="services" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="services">サービス</TabsTrigger>
              <TabsTrigger value="recruit">採用情報</TabsTrigger>
            </TabsList>
            <div className="mt-[60px]">
              <TabsContent value="services">
                <ServicesTab />
              </TabsContent>
              <TabsContent value="recruit">
                <RecruitTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </main>
  );
} 