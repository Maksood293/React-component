//  TODO: i18n placeholder text
import React from 'react'
import './styles.scss'
import { BEMHelper } from '../../../utils/bem-helper'
import { IInputProps } from '../Interfaces/dtos'
export const emailRegEx = /^\s*(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/

const classHelper = BEMHelper('input')


export const Input: React.FC<IInputProps> = ({
  className,
  invalid,
  type = 'text',
  child,
  iconName,
  placeholder,
  ...props
}) => {
  const [inputType, updateInputType] = React.useState(type)
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    inputType === 'text' ? updateInputType('password') : updateInputType('text')
  }

  const renderRightContent = (
    type: string,
    inputType?: string,
    child?: JSX.Element
  ) => {

    if (child) {
      return child
    }

    if (type === 'password' && inputType === 'password') {
      return <i className="fas fa-eye-slash" onClick={clickHandler} />
    }

    if (type === 'password' && inputType === 'text') {
      return <i className={'fas fa-eye'} onClick={clickHandler} />
    }

    if (type === 'email' && inputType === 'email' && props.value) {
      if (emailRegEx.test(props.value.toString()))
        return <i className='fas fa-check email-success' />
      else if (invalid)
        return <i className='fas fa-close email-error' />

    }

    return <span></span>

  }

  return (
    <div
      className={classHelper(
        '',
        [props.disabled && 'disabled', invalid ? 'invalid' : ''],
        className ? className : ''
      )}
    >
      {iconName ? <i className={`fas ${iconName} ${invalid ? 'invalid' : ''}`} /> : ''}
      <input
        {...props}
        className={classHelper('field', [invalid ? 'invalid' : ''])}
        type={inputType}
        placeholder={placeholder}
      />
      {renderRightContent(type, inputType, child)}
    </div>
  )
}
Input.displayName = 'Input'

export const InputWithRef = React.forwardRef<HTMLInputElement, IInputProps>(
  (
    { className = '', invalid, type = 'text', iconName, child, placeholder, ...props },
    ref
  ) => {
    const [inputType, updateInputType] = React.useState(type)
    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
      inputType === 'text'
        ? updateInputType('password')
        : updateInputType('text')
    }

    const renderRightSidedChildComponent = (
      type: string,
      inputType?: string,
      child?: JSX.Element
    ) => {
      if (child) {
        return child
      }
      if (type === 'password' && inputType === 'password') {
        return <i className="fas fa-eye-slash" onClick={clickHandler} />
      } else if (type === 'password' && inputType === 'text') {
        return <i className={'fas fa-eye'} onClick={clickHandler} />
      } else {
        return <span></span>
      }
    }

    return (
      <div className={classHelper('', [], className ? className : '')}>
        {iconName ? <i className={`fa ${iconName}`} /> : ''}
        <input
          {...props}
          className={classHelper('field', [invalid ? 'invalid' : ''])}
          type={inputType}
          ref={ref}
          placeholder={placeholder}
        />
        {renderRightSidedChildComponent(type, inputType, child)}
      </div>
    )
  }
)

InputWithRef.displayName = 'InputWithRef'
