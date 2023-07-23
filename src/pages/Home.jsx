import React, { useContext } from 'react';

import { ConnectionContext } from '../hooks/useConnection';

import ContactRequests from '../components/ContactRequests/ContactRequests';
import MyContacts from '../components/MyContacts/MyContacts';
import Recommendations from '../components/Recommendations/Recommendations';
import image from '../assets/avatar.svg';
import Header from '../components/Header/Header';
import { useGetFriends } from '../hooks/callAPI';

function Home() {
  const { connection } = useContext(ConnectionContext);
  const { data } = useGetFriends();

  let myContacts = data;
  let contactRequests = [
    {
      id: 2,
      name: 'PEZZOTTA',
      firstName: 'Coralie',
      image: image,
    },
    {
      id: 4,
      name: 'MULLER',
      firstName: 'Geof',
      image: image,
    },
  ];
  let recommendations = [
    {
      id: 3,
      name: 'ROBERT',
      firstName: 'Etienne',
      image: image,
    },
  ];
  return (
    <div className="gap">
      <Header />
      <div className="columnCenter">
        <label>{`${connection.firstName} ${connection.name}`}</label>
        <img src={image} className="myAvatar" />
      </div>
      {contactRequests.length > 0 && (
        <article>
          <label>Demandes</label>
          <ContactRequests contacts={contactRequests} />
        </article>
      )}
      {myContacts.length > 0 && (
        <article>
          <label>Mes contacts</label>
          <MyContacts contacts={myContacts} />
        </article>
      )}
      {recommendations.length > 0 && (
        <article>
          <label>Autre contacts</label>
          <Recommendations contacts={recommendations} />
        </article>
      )}
    </div>
  );
}

export default Home;
