import React from 'react'
import './styles.scss'
import { BEMHelper } from '../../../utils/bem-helper'
import { IHeadingProps } from '../Interfaces/dtos'



export const Heading: React.FC<IHeadingProps> = ({
  type = 'h3',
  className,
  children,
  fontWeight = 'bold',
  values,
  ...rest
}) => {
  const classHelper = BEMHelper('heading')(
    '',
    [type, fontWeight],
    `${className ?? ''}`
  )
  switch (type) {
    case 'h1':
      return (
        <h1 {...rest} className={classHelper}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 {...rest} className={classHelper}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 {...rest} className={classHelper}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 {...rest} className={classHelper}>
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5 {...rest} className={classHelper}>
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6 {...rest} className={classHelper}>
          {children}
        </h6>
      )
    default:
      return (
        <h3 {...rest} className={classHelper}>
          {children}
        </h3>
      )
  }
}
