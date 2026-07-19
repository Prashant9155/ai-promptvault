import PromptContentField from "./PromptContentField";

export default function PromptEditor({
  register,
  errors,
}) {
  return (
    <div className="space-y-6 rounded-xl border bg-card p-6">
      <div>
        <h3 className="text-lg font-semibold">
          Prompt Content
        </h3>

        <p className="text-sm text-muted-foreground">
          Write the prompt that will be sent to your AI model.
        </p>
      </div>

      <PromptContentField
        register={register}
        errors={errors}
      />
    </div>
  );
}