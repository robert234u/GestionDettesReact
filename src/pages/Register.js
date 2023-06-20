import React from 'react'
import '../styles/identification.css'

function Register() {
  function handelSubmit(e) {
    e.preventDefault()
    console.log('SUBMIT')
  }

  return (
    <form onSubmit={handelSubmit} className="flexColumnCenter">
      <div className="labelAndInput">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ex. MARTIN"
          autoFocus
          required
        />
      </div>
      <div className="labelAndInput">
        <label htmlFor="firstName">Prenom</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Ex. Gabriel"
          required
        />
      </div>
      <div className="labelAndInput">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ex. nom.prenom@gmail.com"
          required
        />
      </div>
      <div className="labelAndInput">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe secret"
          required
        />
      </div>
      <input type="submit" value="Creer un compte" />
    </form>
  )
}

export default Register
