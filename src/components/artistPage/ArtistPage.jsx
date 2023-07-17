import React from 'react';
import ImagePlaceHolder from '../../assets/images/ImagePlaceHolder.png';
import avatar from '../../assets/images/avatar/avatar.png';
import './ArtistPage.css';
import bannerArtistPage from '../../assets/images/bannerArtistPage.png';

export default function ArtistPage() {
  return (
    <div className="ArtistPages">
      <div className='fundo'></div>
      <div className='fundoMaior'></div>
      <img src={avatar} alt="avatar" className="avatar" />
    </div>

  );
} 