"use client";

import { useState } from "react";

import SectionHeader from "../features/SectionHeader";
import { workflow } from "./workflow.data";
import WorkflowPreview from "./WorkflowPreview";
import WorkflowSteps from "./WorkflowSteps";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(workflow[0]);

  return (
    <section id="how-it-works" className="scroll-mt-24 py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="⚡ How It Works"
          title="Build Your AI Prompt Workspace in Minutes"
          description="From creating your first prompt to organizing and enhancing it with Gemini AI, AI PromptVault makes prompt management effortless."
        />

        {/* Desktop */}
        <div className="mt-20 hidden lg:block">
          <WorkflowSteps
            steps={workflow}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />

          <div className="mt-12">
            <WorkflowPreview activeStep={activeStep} />
          </div>
        </div>

        {/* Tablet */}
        <div className="mt-16 hidden gap-10 md:grid lg:hidden">
          <WorkflowSteps
            steps={workflow}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />

          <WorkflowPreview activeStep={activeStep} />
        </div>

        {/* Mobile */}
        <div className="mt-12 space-y-8 md:hidden">
          {workflow.map((step) => (
            <div key={step.id} className="space-y-6">
              <WorkflowSteps
                steps={[step]}
                activeStep={step}
                setActiveStep={() => {}}
              />

              <WorkflowPreview activeStep={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
