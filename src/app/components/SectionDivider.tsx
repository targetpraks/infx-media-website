"use client";

interface SectionDividerProps {
  variant?: "lime" | "blood" | "cyan";
  className?: string;
}

export default function SectionDivider({ variant = "lime", className = "" }: SectionDividerProps) {
  const colorMap = {
    lime: "var(--lime)",
    blood: "var(--blood)",
    cyan: "var(--cyan)",
  };

  return (
    <div className={`relative w-full flex items-center justify-center py-8 ${className}`} aria-hidden="true">
      <div
        className="w-full max-w-[1400px] mx-auto h-px opacity-20"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${colorMap[variant]} 20%, ${colorMap[variant]} 80%, transparent 100%)`,
        }}
      />
    </div>
  );
}
