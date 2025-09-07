'use client';

import { LEQ5 } from '../FRQData.js';
import React, { useState } from 'react';
import Link from 'next/link';

export default function LEQ5Page() {
  const prompts = Object.values(LEQ5[0]);
  const [selected, setSelected] = useState(0);
  const subunit = prompts[selected];

  return (
    <div className="bg-stone-200" style={{ padding: 24, minHeight: '100vh', fontWeight: 300 }}>
      <div style={{ position: 'relative', marginBottom: 32 }}>
        <Link href="/" style={{ position: 'absolute', left: 0, top: 0, textDecoration: 'none', color: '#222', fontWeight: 600, fontSize: 18, padding: 8, borderRadius: 8, background: 'rgba(255,255,255,0.7)', boxShadow: '0 1px 4px #ddd', display: 'inline-block' }}>
          ← Back
        </Link>
        <span className="unit-title-playfair" style={{ display: 'block', textAlign: 'center', fontSize: 44, fontWeight: 700, letterSpacing: -1, marginBottom: 0, color: '#222' }}>
          LEQ 5
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        {prompts.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            style={{
              width: 120,
              height: 40,
              borderRadius: 9999,
              background: selected === idx ? '#ffedd5' : '#fff',
              color: selected === idx ? '#b45309' : '#222',
              border: 'none',
              margin: '0 8px',
              fontWeight: 'bold',
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: selected === idx ? '0 0 0 2px #fbbf24' : 'none',
              transition: 'background 0.2s, color 0.2s',
              padding: '0 24px',
            }}
            aria-label={`Prompt ${idx + 2}`}
            title={`Prompt ${idx + 2}`}
          >
            {`${idx + 2}`}
          </button>
        ))}
      </div>
      {/* Prompts Container */}
      <div style={{ margin: '0 auto', maxWidth: 700, background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 2px 8px #eee', fontWeight: 400, marginBottom: 32 }}>
        <h3 style={{ textAlign: 'center', fontSize: 22, marginBottom: 0, color: '#b45309', fontWeight: 700 }}>LEQ 5 Prompts</h3>
        <div style={{ marginTop: 12, textAlign: 'center', fontSize: 17, color: '#444' }}>Answer Question 2 OR Question 3 OR Question 4</div>
      </div>
      <div style={{ margin: '0 auto', maxWidth: 700, background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 2px 8px #eee', fontWeight: 300 }}>
        <h3 style={{ textAlign: 'center', fontSize: 20, marginBottom: 16 }}>{`Prompt ${selected + 2}`}</h3>
        <div style={{ marginBottom: 18, textAlign: 'left', fontSize: 16, color: '#444' }}>
          {subunit}
        </div>
      </div>
    </div>
  );
}
