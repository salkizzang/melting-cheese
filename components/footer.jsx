'use client';

import './modern-styles.css';

export default function Footer() {
  return (
    <footer className="vintage-footer">
      <div className="footer-decoration">
        <div className="footer-wave"></div>
      </div>
      <div className="footer-content">
        <p className="copyright">
          © Melting Cheese. All rights reserved.
        </p>
      </div>
    </footer>
  );
}