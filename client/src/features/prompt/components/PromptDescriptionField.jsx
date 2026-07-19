import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function PromptDescriptionField({
  register,
  errors,
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="description">
        Description
      </Label>

      <Textarea
        id="description"
        rows={3}
        placeholder="Short description..."
        {...register("description")}
      />

      {errors.description && (
        <p className="text-sm text-destructive">
          {errors.description.message}
        </p>
      )}
    </div>
  );
}