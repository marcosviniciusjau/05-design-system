import { Label, MultiStepContainer, Step, Steps } from './styled'

export interface MultiStepProps {
  size: number
  currentStep?: number
}
export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo de {currentStep} de {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'Multi Step'