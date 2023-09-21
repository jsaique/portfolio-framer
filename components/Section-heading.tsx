"use client";

interface SectionheadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionheadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
