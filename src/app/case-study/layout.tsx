import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study — Papa Pasta Sandton | INFX TakeOver",
  description:
    "How Papa Pasta Sandton increased foot traffic 23% and unlocked new sponsor revenue with an MTN TakeOver by INFX. Read the full case study.",
  keywords: [
    "case study",
    "Papa Pasta",
    "retail media results",
    "foot traffic increase",
    "QSR activation",
    "INFX TakeOver",
    "MTN",
    "Sandton",
  ],
  openGraph: {
    title: "Case Study — Papa Pasta Sandton | INFX TakeOver",
    description:
      "How Papa Pasta Sandton increased foot traffic 23% and unlocked new sponsor revenue with an MTN TakeOver.",
    url: "https://infxmedia.xyz/case-study",
    siteName: "INFX TakeOver",
    type: "article",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study — Papa Pasta Sandton | INFX TakeOver",
    description:
      "How Papa Pasta Sandton increased foot traffic 23% and unlocked new sponsor revenue with an MTN TakeOver.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
