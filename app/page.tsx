"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import Company from "@/components/Company";
import Service from "@/components/Service";
import Recruitment from "@/components/Recruitment";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto">
        <Company />
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
      </div>
    </main>
  );
} 