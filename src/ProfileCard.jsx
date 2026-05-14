// A minimal personal "link-in-bio" component in React
import React from 'react';

const ProfileCard = () => {
  const links = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Blog', url: 'https://username.com' },
  ];

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif',
      backgroundColor: '#f4f4f4', color: '#333'
    }}>
      <img src="profile.jpg" alt="Profile" style={{
        borderRadius: '50%', width: '150px', height: '150px'
      }} />
      <h1 style={{ fontSize: '2rem', marginTop: '1rem' }}>Name</h1>
      <p style={{ color: '#666', marginTop: '-1rem', marginBottom: '2rem' }}>
        Short bio goes here.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {links.map(link => (
          <a key={link.name} href={link.url} style={{
            textDecoration: 'none', color: 'white', backgroundColor: '#333',
            padding: '10px 20px', borderRadius: '5px', width: '200px',
            textAlign: 'center'
          }}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
