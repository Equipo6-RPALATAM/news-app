/* eslint-disable @typescript-eslint/restrict-template-expressions */
interface Props {
  children?: React.ReactNode
  className?: string
}

export const Card = ({ children, className }: Props): JSX.Element => {
  const renderClass = !className ? 'card' : `card ${className}`

  return (
    <div className={renderClass}>
      <div className="card__body">{children}</div>
    </div>
  )
}
