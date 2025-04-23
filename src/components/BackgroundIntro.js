import React from 'react';
import '../assets/styles/components.css';
import homeVideo from '../assets/videos/killphishHomeLoop.mp4';

const BackgroundIntro = () => {
  return (
    <div className='home__container'>
      <div className='home__intro__container'>
        <div
          // play video in background auto play stackoverflw fix
          dangerouslySetInnerHTML={{
            __html: `<video autoPlay loop muted playsinline>
              <source src=${homeVideo} type="video/mp4" />
            </video>`,
          }}
        />
        <div className='home__intro__header'>
          <h2>Mitigate Phishing</h2>
          <h2>Through Education</h2>
          <div className='home__intro__subHeader'>
            <h3>Go to training for Certificate of Phishing Awareness & Training+. (CPAT+)</h3>
          </div>
          <div className='home__intro__btns row'>
            <a className='home__intro_btn' href='/training'>go to training</a>
            <a className='home__intro_btn' href='/phishgpt'>generate phishing template with PhishGPT</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundIntro