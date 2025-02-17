import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CaseStudyProps {
  icon: LucideIcon;
  title: string;
  challenges: string[];
  solutions: string[];
  results: string[];
}

export const CaseStudy = ({ icon: Icon, title, challenges, solutions, results }: CaseStudyProps) => (
  <div className="border rounded-lg p-6 space-y-4">
    <div className="flex items-center gap-2">
      <Icon className="h-6 w-6" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="space-y-2">
      <p className="font-semibold">課題</p>
      <ul className="list-disc list-inside space-y-1">
        {challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>
    </div>
    <div className="space-y-2">
      <p className="font-semibold">導入したソリューション</p>
      <ul className="list-disc list-inside space-y-1">
        {solutions.map((solution, index) => (
          <li key={index}>{solution}</li>
        ))}
      </ul>
    </div>
    <div className="space-y-2">
      <p className="font-semibold">成果</p>
      <ul className="list-disc list-inside space-y-1">
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  </div>
);