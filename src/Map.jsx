import React from 'react';

function Map() {
  return (
    <div style={{ position:'relative',paddingTop:'10%', width: '100%', maxWidth: '100vw', height: '300px' }}>
      <div className="container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1384473.6259677978!2d12.15343668125!3d47.33289382654466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477832ab852dd7bf%3A0x1c6dd1d90b67e9e!2sTre%20Cime%20di%20Lavaredo!5e0!3m2!1sen!2s!4v1713852936762!5m2!1sen!2s"
          title="Map"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: '0',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
