"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { createPrompt } from "../api/prompt.api";

export default function useCreatePrompt() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleCreatePrompt = async (values) => {
    try {
      setLoading(true);

      const response = await createPrompt(values);

      toast.success(response.message);

      router.push("/dashboard/prompts");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to create prompt."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleCreatePrompt,
  };
}