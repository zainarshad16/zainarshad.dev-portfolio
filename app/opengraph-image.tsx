import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Zain Arshad | Full Stack & Sitecore XM Cloud Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL 
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` 
    : process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#05050a',
          position: 'relative',
        }}
      >
        {/* Background Gradients/Glows matching the site theme (--accent: #7c3aed) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
        
        {/* Grid Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* The Glassmorphic Card - CENTERED LAYOUT FOR WHATSAPP CROP */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '900px',
            height: '520px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(124, 58, 237, 0.2)',
            borderRadius: '32px',
            padding: '40px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            textAlign: 'center',
          }}
        >
          {/* Profile Picture */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              marginBottom: '24px',
              boxShadow: '0 8px 16px rgba(124, 58, 237, 0.25)',
              border: '2px solid #7c3aed',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img 
              src={`${baseUrl}/zain.jpg`}
              style={{ 
                position: 'absolute',
                top: '-50px',
                left: '-55px',
                width: '220px', 
                height: '220px', 
                objectFit: 'cover',
              }}
            />
          </div>

          <h1
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 0 12px 0',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Zain Arshad
          </h1>
          
          <h2
            style={{
              fontSize: '26px',
              fontWeight: 500,
              color: '#94a3b8',
              margin: '0 0 24px 0',
              letterSpacing: '0.01em',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#a78bfa', marginRight: '10px' }}>&lt;/&gt;</span>
            Full Stack & Sitecore XM Cloud Developer
          </h2>
          
          {/* Website pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              background: 'rgba(124, 58, 237, 0.1)',
              borderRadius: '100px',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              marginBottom: '32px',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: '12px' }}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span
              style={{
                fontSize: '20px',
                color: '#c4b5fd',
                fontWeight: 500,
              }}
            >
              zainarshad-portfolio.vercel.app
            </span>
          </div>

          {/* Bottom: Tech Stack Logos Horizontal */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '24px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* React */}
            <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
              <svg viewBox="-11.5 -10.23174 23 20.46348" width="48" height="48">
                <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
            </div>

            {/* Next.js (Official Logo from public folder) */}
            <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'white', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
               <img src={`${baseUrl}/next.svg`} style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
            </div>

            {/* TypeScript */}
            <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
              <div style={{ background: '#3178C6', color: 'white', width: '48px', height: '48px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '4px 8px', fontSize: '24px', fontWeight: 'bold', borderRadius: '6px' }}>
                TS
              </div>
            </div>

            {/* Sitecore */}
            <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
               <img 
                 src={`${baseUrl}/sitecore_logo.jpg`}
                 style={{ width: '48px', height: '48px', borderRadius: '6px', objectFit: 'cover' }}
               />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
