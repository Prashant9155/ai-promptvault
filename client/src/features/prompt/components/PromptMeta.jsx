export default function PromptMeta({ register, errors }) {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div>
        <h3 className="text-lg font-semibold">
          Metadata
        </h3>

        <p className="text-sm text-muted-foreground">
          Collections, tags and visibility settings will
          appear here.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <label className="block text-sm font-medium text-muted-foreground">
          AI Model
        </label>
        <select
          {...register("aiModel")}
          className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="GPT4">GPT4</option>
          <option value="CLAUDE">CLAUDE</option>
          <option value="GEMINI">GEMINI</option>
          <option value="LLAMA">LLAMA</option>
          <option value="MISTRAL">MISTRAL</option>
        </select>
        {errors.aiModel && (
          <p className="text-sm text-red-500">
            {errors.aiModel.message}
          </p>
        )}
      </div>
    </div>
  );
}