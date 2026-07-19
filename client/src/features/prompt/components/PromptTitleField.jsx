import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PromptTitleField({
  register,
  errors,
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor="title">
        Title
      </Label>

      <Input
        id="title"
        placeholder="Enter prompt title"
        {...register("title")}
      />

      {errors.title && (
        <p className="text-sm text-destructive">
          {errors.title.message}
        </p>
      )}
    </div>
  );
}