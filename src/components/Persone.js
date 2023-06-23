import React from 'react'

function creditOrDebt(credit) {
  if (credit > 0) {
    return 'Crédit ' + credit + ' €'
  } else if (credit < 0) {
    return 'Dette ' + credit + ' €'
  } else {
    return ''
  }
}

function Persone({
  name,
  firstName,
  inMyContact,
  contactRequest,
  credit,
  imagePath,
}) {
  if (inMyContact) {
    return (
      <div>
        <img src={imagePath} />
        <div>
          <p>{firstName + ' ' + name}</p>
          <p>{creditOrDebt(credit)}</p>
          <button>Supprimer</button>
          <button>
            Historique <spane className="goldDollar">$</spane>
          </button>
        </div>
      </div>
    )
  } else if (contactRequest) {
    return (
      <div>
        <p>{firstName + ' ' + name}</p>
        <div>
          <button>Décliner</button>
          <button>Accepter</button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <p>{firstName + ' ' + name}</p>
        <button>Ajouter</button>
      </div>
    )
  }
}

export default Persone
