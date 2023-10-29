const colorSetting = [
  {
    key: 'primary',
    class: [
      'text-white',
      'bg-indigo-600',
      'hover:bg-indigo-700',
      'focus:ring-indigo-500',
      'border-transparent',
      'primary-button',
    ],
  },
  {
    key: 'default',
    class: [
      'text-gray-700',
      'bg-white',
      'hover:bg-gray-100',
      'focus:ring-indigo-500',
      'border-gray-300',
      'default-button',
    ],
  },
  {
    key: 'danger',
    class: [
      'text-white',
      'bg-red-600',
      'hover:bg-red-700',
      'focus:ring-red-500',
      'border-transparent',
      'danger-button',
    ],
  },
] as const

type ColorType = (typeof colorSetting)[number]['key']

const sizeSetting = [
  { key: 'xl', class: ['py-2', 'px-4', 'text-xl'] },
  { key: 'large', class: ['py-2', 'px-4', 'text-lg'] },
  { key: 'medium', class: ['py-2', 'px-4', 'text-base'] },
  { key: 'small', class: ['py-2', 'px-4', 'text-sm'] },
] as const

type SizeType = (typeof sizeSetting)[number]['key']

type PropsTypes = {
  children: React.ReactNode
  color: ColorType
  size: SizeType
  // eslint-disable-next-line react/require-default-props
  fullWidth?: boolean
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean
  // eslint-disable-next-line react/require-default-props
  classes?: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (event: any) => void
}

export function Button(props: PropsTypes) {
  const {
    children,
    color,
    size,
    fullWidth,
    disabled,
    classes = [],
    onClick,
  } = props

  const colorStyles = colorSetting
    .filter((map) => map.key === color)
    .map((map) => map.class)[0]

  const sizeStyles = sizeSetting
    .filter((map) => map.key === size)
    .map((map) => map.class)[0]

  const className = [
    'inline-flex',
    'justify-center',
    'rounded-md',
    'border',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    ...colorStyles,
    ...sizeStyles,
    ...classes,
  ].join(' ')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    if (onClick && !disabled) {
      onClick(event)
    }
  }

  return (
    <button
      type="button"
      className={`${className} ${fullWidth ? 'w-full' : ''} ${
        disabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
      onClick={handleSubmit}
    >
      {children}
    </button>
  )
}

export default Button
