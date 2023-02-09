/* eslint-disable @typescript-eslint/ban-types */
interface Props {
  children?: React.ReactElement | React.ReactElement[]
}

export const DetailLayout = ({ children }: Props) => {
  return <div className="detail__grid">{children}</div>
}
