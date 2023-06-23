import React from 'react'
import { Link } from 'react-router-dom'
import Contacts from '../../components/Contacts'

function giveContactRequest(contacts) {
  let contactRequests = []
  contacts.map((contact) => {
    if (contact.contactRequest) {
      contactRequests.push(contact)
    }
  })
  return contactRequests
}

function giveContacts(contacts) {
  let myContacts = []
  contacts.map((contact) => {
    if (contact.inMyContact) {
      myContacts.push(contact)
    }
  })
  return myContacts
}

function giveOtherContacts(contacts) {
  let otherContacts = []
  contacts.map((contact) => {
    if (!contact.inMyContact && !contact.contactRequest) {
      otherContacts.push(contact)
    }
  })
  return otherContacts
}

function Home() {
  let contacts = [
    {
      id: 1,
      name: 'ROBERT',
      firstName: 'Colin',
      inMyContact: true,
      contactRequest: false,
      credit: 15.2,
      imagePath: '',
    },
    {
      id: 2,
      name: 'PEZZOTTA',
      firstName: 'Coralie',
      inMyContact: false,
      contactRequest: true,
      imagePath: '',
    },
    {
      id: 3,
      name: 'ROBERT',
      firstName: 'Etienne',
      inMyContact: false,
      contactRequest: false,
      imagePath: '',
    },
  ]

  return (
    <div>
      <Link to="/connection">Connection</Link>
      <br />
      <label>Demande</label>
      <Contacts contacts={giveContactRequest(contacts)} />
      <label>Mes contacts</label>
      <Contacts contacts={giveContacts(contacts)} />
      <label>Autre contacts</label>
      <Contacts contacts={giveOtherContacts(contacts)} />
    </div>
  )
}

export default Home
