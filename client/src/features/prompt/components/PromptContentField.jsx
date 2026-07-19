import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function PromptContentField({
  register,
  errors,
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="content">
        Prompt
      </Label>

      <Textarea
        id="content"
        rows={14}
        placeholder="Write your AI prompt..."
        className="resize-none"
        {...register("content")}
      />

      {errors.content && (
        <p className="text-sm text-destructive">
          {errors.content.message}
        </p>
      )}
    </div>
  );
}