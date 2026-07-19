"use client";

import { useForm } from "react-hook-form";
import useCreatePrompt from "../hooks/useCreatePrompt";
import PromptHeader from "./PromptHeader";
import PromptBasicInfo from "./PromptBasicInfo";
import PromptEditor from "./PromptEditor";
import PromptMeta from "./PromptMeta";
import PromptActions from "./PromptActions";

export default function PromptForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      content: "",
      aiModel: "GEMINI",
    },
  });

  const {
    loading,
    handleCreatePrompt,
  } = useCreatePrompt();

  const onSubmit = (values) => {
    handleCreatePrompt(values);
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <PromptHeader
        title="Create Prompt"
        description="Create reusable AI prompts for your workspace."
      />

      <PromptBasicInfo
        register={register}
        errors={errors}
      />

      <PromptEditor
        register={register}
        errors={errors}
      />

      <PromptMeta
        register={register}
        errors={errors}
      />

      <PromptActions />
    </form>
  );
}