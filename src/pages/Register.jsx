import React, { useContext } from 'react';

import { ConnectionContext } from '../hooks/useConnection';

import LabelAndInput from '../components/LabelAndInput';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { createConnection } = useContext(ConnectionContext);
  const navigate = useNavigate();

  async function signIn(lastname, firstname, password, email) {
    try {
      const response = await fetch(
        'http://localhost:1337/api/auth/local/register',
        {
          method: 'POST',
          body: JSON.stringify({
            username: email,
            lastname,
            firstname,
            password,
            email,
          }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const data = await response.json();
      if (!data.error) {
        createConnection({
          name: data.user.lastname,
          firstName: data.user.firstname,
          email: data.user.email,
        });
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handelSubmit(e) {
    e.preventDefault();
    signIn(
      e.target.name.value,
      e.target.firstName.value,
      e.target.password.value,
      e.target.email.value
    );
    navigate('/');
  }

  return (
    <form onSubmit={handelSubmit} className="flex column pageCenter">
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
        label="Email"
      />
      <LabelAndInput
        type="password"
        name="password"
        id="password"
        placeholder="Mot de passe secret"
        label="Mot de passe"
      />
      <Button type="submit" style="primary">
        Connexion
      </Button>
    </form>
  );
}
