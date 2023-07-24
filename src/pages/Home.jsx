import React, { useContext } from 'react';

import { ConnectionContext } from '../hooks/useConnection';

import ContactRequests from '../components/ContactRequests/ContactRequests';
import MyContacts from '../components/MyContacts/MyContacts';
import Recommendations from '../components/Recommendations/Recommendations';
import image from '../assets/avatar.svg';
import Header from '../components/Header/Header';
import { useGetFriends, useGetRequests } from '../hooks/callAPI';

function Home() {
  const { connection } = useContext(ConnectionContext);
  const { friendsWithCredit } = useGetFriends();
  const { data: requests } = useGetRequests();

  let myContacts = friendsWithCredit;
  let contactRequests = requests;
  let recommendations = [
    {
      id: 0,
      name: 'NOM',
      firstName: 'PRENOM',
    },
  ];
  return (
    <div className="gap">
      <Header noAvatar />
      <div className="padding gap">
        <div className="columnCenter">
          <label>{`${connection.firstName} ${connection.name}`}</label>
          <img src={image} className="myAvatar" />
        </div>
        {contactRequests != undefined && (
          <article>
            <label>Demandes</label>
            <ContactRequests contacts={contactRequests} />
          </article>
        )}
        {myContacts != undefined && (
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
    </div>
  );
}

export default Home;
