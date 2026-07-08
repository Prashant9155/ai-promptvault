import WorkflowStep from "./WorkflowStep";

export default function WorkflowSteps({
  steps,
  activeStep,
  setActiveStep,
}) {
  return (
    <div
      className="
        grid
        gap-4
        lg:grid-cols-4
      "
    >
      {steps.map((step) => (
        <WorkflowStep
          key={step.id}
          step={step}
          isActive={activeStep.id === step.id}
          onClick={() => setActiveStep(step)}
        />
      ))}
    </div>
  );
}