// src/app/faq/page.tsx
import FaqPageContent from "@/components/layout/FaqPageContent";
import { Metadata } from "next";

// --- NEW: Page-Specific Metadata for SEO ---
export const metadata: Metadata = {
  title: "FAQ - Alberton Battery Mart | Free Testing & Fitment",
  description: "Answers to common battery questions in Alberton. Learn about our free callouts, warranty, and AGM/EFB batteries. Get expert advice.",
};

// This page serves as the dedicated SEO resource for FAQ keywords
export default function FaqPage() {
  return <FaqPageContent />;
}