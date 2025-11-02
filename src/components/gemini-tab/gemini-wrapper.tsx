"use client";
import { AIChatProvider, useAIChat } from "@/context/ai-context";
import GeminiContent from "./gemini-content";

export default function GeminiWrapper() {
  return (
    <AIChatProvider>
      <GeminiContent />
    </AIChatProvider>
  );
}
