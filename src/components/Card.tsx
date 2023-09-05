const VARIANT_OPTIONS = ['white', 'glass', 'dark_glass'] as const

type VariantOption = typeof VARIANT_OPTIONS[number]

interface CardProps {
  variant?: VariantOption
  children?: any
  classes?: string
}

export default function Card(props: CardProps) {
  const VARIANT_CLASSES: Record<VariantOption, string> = {
    dark_glass: 'bg-black/50',
    glass: 'bg-glass backdrop-blur',
    white: 'bg-white',
  }

  const { variant = "white" } = props;

  return (
    <div className={`p-4 rounded drop-shadow-md ${VARIANT_CLASSES[variant]} ${props.classes}`}>
      {props.children}
    </div>
  )
}
