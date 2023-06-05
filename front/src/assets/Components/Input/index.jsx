import React from "react"

export const Input = ({ id, value, readOnly, label, type, register, placeholder, disabled, autoComplete }) => {
  
  return (

    <fieldset>

      <label htmlFor={id}>{label}</label>
      <input id={id} readOnly={readOnly} value={value} type={type} placeholder={placeholder} disabled={disabled} {...register} autoComplete={autoComplete} />
    
    </ fieldset>
    
  )
}