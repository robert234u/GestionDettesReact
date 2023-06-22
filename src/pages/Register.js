import React from 'react'
import LabelAndInput from '../components/LabelAndInput'

function Register() {
  function handelSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handelSubmit} className="flexColumnCenter">
      <LabelAndInput
        type="text"
        name="name"
        id="name"
        placeholder="Ex. MARTIN"
        autoFocus
        label="Nom"
      />
      <LabelAndInput
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Ex. Gabriel"
        label="Prenom"
      />
      <LabelAndInput
        type="email"
        name="email"
        id="email"
        placeholder="Ex. nom.prenom@gmail.com"
        autoFocus
        label="Email"
      />
      <LabelAndInput
        type="password"
        name="password"
        id="password"
        placeholder="Mot de passe secret"
        label="Mot de passe"
      />
      <input type="submit" value="Creer un compte" />
    </form>
  )
}

export default Register
