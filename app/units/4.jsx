'use client';


import unitsdata from './unitsdata.js';
import React, { useState } from 'react';
import Link from 'next/link';


export default function Unit4() {
  const unitData = unitsdata['4'];
  const [selected, setSelected] = useState(0);
  const subunit = unitData[selected];
  const unitName = unitData[0]?.subunit?.split(':')[0]?.replace(/Unit 4\.?/, '').trim() || '';

  return (
  <div className="bg-stone-200" style={{ padding: 24, minHeight: '100vh', fontWeight: 300 }}>
      <div style={{ position: 'relative', marginBottom: 32 }}>
        <Link href="/" style={{ position: 'absolute', left: 0, top: 0, textDecoration: 'none', color: '#222', fontWeight: 600, fontSize: 18, padding: 8, borderRadius: 8, background: 'rgba(255,255,255,0.7)', boxShadow: '0 1px 4px #ddd', display: 'inline-block' }}>
          ← Back
        </Link>
        <span className="unit-title-playfair" style={{ display: 'block', textAlign: 'center', fontSize: 44, fontWeight: 700, letterSpacing: -1, marginBottom: 0, color: '#222' }}>
          Unit 4
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 24, fontWeight: 400, marginLeft: 16, color: '#444' }}>{unitName && `- ${unitName}`}</span>
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        {unitData.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: selected === idx ? '#ffedd5' : '#fff', // orange-100 or white
              color: selected === idx ? '#b45309' : '#222', // orange-700 or default
              border: 'none',
              margin: '0 8px',
              fontWeight: 'bold',
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: selected === idx ? '0 0 0 2px #fbbf24' : 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
            aria-label={s.subunit}
            title={s.subunit}
          >
            {`4.${idx + 1}`}
          </button>
        ))}
      </div>
      <div style={{ margin: '0 auto', maxWidth: 700, background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 2px 8px #eee', fontWeight: 300 }}>
        <h3 style={{ textAlign: 'center', fontSize: 24, marginBottom: 16 }}>{subunit.subunit}</h3>
        <div style={{ marginBottom: 18, textAlign: 'center' }}>
          {subunit.badges && subunit.badges.map((tag, i) => (
            <span key={i} style={{ background: '#222', color: '#fff', borderRadius: 12, padding: '1px 7px', marginRight: 6, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{tag}</span>
          ))}
        </div>
        <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
          {subunit.events.map((event, i) => (
            event.subheading ? (
              <li key={i} style={{ fontWeight: 'bold', marginTop: 18, textAlign: 'center', fontSize: 18 }}>{event.subheading}</li>
            ) : (
              <li
                key={i}
                style={{
                  marginLeft: 40 + ((typeof event.indent === 'number' && !isNaN(event.indent) ? event.indent : 0) * 20),
                  fontSize: 16,
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 300
                }}
              >
                <span style={{ fontSize: 18, marginRight: 10, marginTop: 0, lineHeight: 1 }}>•</span>
                <span dangerouslySetInnerHTML={{ __html: event.text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
}
