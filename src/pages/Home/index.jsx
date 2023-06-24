import React from 'react';
import { Link } from 'react-router-dom';
import ContactRequests from '../../components/ContactRequests';
import MyContacts from '../../components/MyContacts';
import Recommendations from '../../components/Recommendations';

function Home() {
  let myContacts = [
    {
      id: 1,
      name: 'ROBERT',
      firstName: 'Colin',
      credit: 15.2,
      imagePath: '',
    },
  ];
  let contactRequests = [
    {
      id: 2,
      name: 'PEZZOTTA',
      firstName: 'Coralie',
      imagePath: '',
    },
  ];
  let recommendations = [
    {
      id: 3,
      name: 'ROBERT',
      firstName: 'Etienne',
      imagePath: '',
    },
  ];

  return (
    <div>
      <Link to="/connection">Connection</Link>
      <br />
      <label>Demande</label>
      <ContactRequests contacts={contactRequests} />
      <label>Mes contacts</label>
      <MyContacts contacts={myContacts} />
      <label>Autre contacts</label>
      <Recommendations contacts={recommendations} />
    </div>
  );
}

export default Home;
