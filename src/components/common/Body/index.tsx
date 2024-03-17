import React from 'react'
import './styles.scss'
import { BEMHelper } from '../../../utils/bem-helper'
import { IBodyProps } from '../Interfaces/dtos'



export const Body: React.FC<IBodyProps> = ({
  className,
  children,
  color,
  type = 'body1',
  isInline,
  fontWeight = 'normal',
  ...rest
}) => {
  const bodyStyles = BEMHelper('body')
  const styleModifications = [
    `clr-${color ?? 'basic'}`,
    `type-${type}`,
    `fontweight--${fontWeight}`,
    isInline && 'is-inline',
  ]


  return (
    <p className={bodyStyles('', styleModifications, className)} {...rest}>
      {children}
    </p>
  )
}
