"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { getPrompts } from "../api/prompt.api";

export default function usePrompts() {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPrompts = async () => {
    try {
      setLoading(true);

      const promptItems = await getPrompts();
      setPrompts(promptItems);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load prompts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrompts();
  }, []);

  return {
    prompts,
    loading,
    refetch: fetchPrompts,
  };
}
