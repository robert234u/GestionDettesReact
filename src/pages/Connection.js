import React from 'react'
import { Link } from 'react-router-dom'
import LabelAndInput from '../components/LabelAndInput'

function Connection() {
  return (
    <div className="flexColumnCenter">
      <form className="flexColumnCenter">
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
