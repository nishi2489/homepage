import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-12">
      <h4 className="text-primary font-medium text-lg mb-2">{subtitle}</h4>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    </div>
  );
};

export default SectionHeading; 