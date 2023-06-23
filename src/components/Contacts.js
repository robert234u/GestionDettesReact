import React from 'react'
import Persone from './Persone'

function Contacts({ contacts }) {
  return (
    <div>
      {contacts.map((contact) => (
        <Persone
          key={contact.id}
          name={contact.name}
          firstName={contact.firstName}
          inMyContact={contact.inMyContact}
          contactRequest={contact.contactRequest}
          credit={contact.credit}
          imagePath={contact.imagePath}
        />
      ))}
    </div>
  )
}

export default Contacts
