import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/identification.css'

function Connection() {
  return (
    <div className="flexColumnCenter">
      <form className="flexColumnCenter">
        <div className="labelAndInput">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ex. nom.prenom@gmail.com"
            autoFocus
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
        <input type="submit" value="Connexion" />
      </form>
      <p>-- ou --</p>
      <div className="gradientBorder">
        <Link to="/register" className="backgroundWhite">
          <button className="gardientText">Creer un compte</button>
        </Link>
      </div>
    </div>
  )
}

export default Connection
