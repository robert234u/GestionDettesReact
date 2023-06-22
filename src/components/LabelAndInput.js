import React from 'react'

function LabelAndInput({ type, name, id, placeholder, autoFocus, label }) {
  return (
    <div className="labelAndInput">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        {...(autoFocus ? 'autoFocus' : '')}
        required
      />
    </div>
  )
}

export default LabelAndInput
