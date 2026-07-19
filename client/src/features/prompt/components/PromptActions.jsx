import { Button } from "@/components/ui/button";

export default function PromptActions({
  loading,
}) {
  return (
    <div className="flex justify-end gap-3 border-t pt-6">
      <Button
        variant="outline"
        type="button"
      >
        Cancel
      </Button>

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Creating..."
          : "Create Prompt"}
      </Button>
    </div>
  );
}