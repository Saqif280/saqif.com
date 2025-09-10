'use client';

import { useEffect } from 'react';

export default function Page2017() {
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.replace('/2017/index.html');
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <p>Loading 2017 website...</p>
    </div>
  );
}
