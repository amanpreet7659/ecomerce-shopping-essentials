import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {children}
    </div>
  )
}

export default Container