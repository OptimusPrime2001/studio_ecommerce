"use client";

import { ButtonDiv } from "@components/shared";
import { cn } from "@utils";
import { Check } from "lucide-react";
import type * as React from "react";

interface StepProps {
  title: string;
  description?: string;
  isCompleted?: boolean;
  isActive?: boolean;
  isLast?: boolean;
  stepNumber?: number;
  onClick?: () => void;
  isLineActive?: boolean;
  isFinished?: boolean;
}

const Step: React.FC<StepProps> = ( {
  title,
  description,
  isCompleted,
  isActive,
  isLast,
  stepNumber = 1,
  onClick,
  isLineActive,
  isFinished,
} ) => {
  const shouldShowAsCompleted = isCompleted || ( isFinished && isLast );

  return (
    <ButtonDiv
      className="flex items-center w-fit cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2 font-semibold transition-all hover:scale-110",
            shouldShowAsCompleted
              ? "border-green-500 bg-green-500 text-white"
              : isActive
                ? "border-slate-800 bg-slate-800 text-white"
                : "border-slate-300 bg-slate-200 text-slate-400 hover:border-slate-400",
          )}
        >
          {shouldShowAsCompleted ? (
            <Check className="w-5 h-5" />
          ) : (
            <span className="text-sm">{stepNumber}</span>
          )}
        </div>

        {/* Step Label */}
        <p
          className={cn(
            "text-lg font-semibold text-center mt-2 transition-colors",
            isActive || shouldShowAsCompleted
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {title}
        </p>
        {description && (
          <p className="text-xs text-muted-foreground text-center mt-1">
            {description}
          </p>
        )}
      </div>

      {!isLast && (
        <div
          className={cn(
            "h-0.5 mx-5 mb-6 !border-t-2 !border-dotted transition-colors w-[15rem]",
            isLineActive || isFinished
              ? "!border-green-500"
              : "!border-slate-300",
          )}
        />
      )}
    </ButtonDiv>
  );
};

interface StepperProps {
  steps: Array<{
    title: string;
    description?: string;
    content?: React.ReactNode;
  }>;
  currentStep: number;
  onStepChange: ( step: number ) => void;
  onFinish?: () => void;
  isFinished?: boolean;
}

export function Stepper ( {
  steps,
  currentStep,
  onStepChange,
  isFinished,
}: StepperProps ) {

  return (
    <div className="w-full mx-auto mt-5">
      <div className="flex  mb-8 justify-center">
        {steps.map( ( step, index ) => (
          <Step
            key={step.title}
            title={step.title}
            description={step.description}
            isCompleted={index < currentStep}
            isActive={index === currentStep}
            isLast={index === steps.length - 1}
            stepNumber={index + 1}
            onClick={() => onStepChange( index )}
            isLineActive={index < currentStep}
            isFinished={isFinished}
          />
        ) )}
      </div>

      {steps[currentStep]?.content && (
        <div className="mb-8 p-6 ">{steps[currentStep].content}</div>
      )}

    </div>
  );
}
