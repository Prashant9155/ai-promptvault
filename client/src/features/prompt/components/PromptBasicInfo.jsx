import PromptTitleField from "./PromptTitleField";
import PromptDescriptionField from "./PromptDescriptionField";

export default function PromptBasicInfo({
  register,
  errors,
}) {
  return (
    <div className="space-y-6 rounded-xl border bg-card p-6">
      <div>
        <h3 className="text-lg font-semibold">
          Basic Information
        </h3>

        <p className="text-sm text-muted-foreground">
          Add a title and short description for your prompt.
        </p>
      </div>

      <PromptTitleField
        register={register}
        errors={errors}
      />

      <PromptDescriptionField
        register={register}
        errors={errors}
      />
    </div>
  );
}