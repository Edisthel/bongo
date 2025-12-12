// components/Footer.js
import React from 'react';
import './styles/hero.css';
import Link from 'next/link';

// Icônes des réseaux (simulées par des emojis ou à remplacer par des icônes réelles comme Font Awesome)
const IconFacebook = () => <span>📘</span>;
const IconTwitter = () => <span>🐦</span>;
const IconLinkedIn = () => <span>💼</span>;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footerContainer">
      <div className="footerWrapper">
        
        {/* Colonne 1 : Logo et Mission Brève */}
        <div className="colBranding">
          <h4 className="logo">FBM - Bongolava Maitso</h4>
          <p className="missionSummary">
            Gestion durable de l'Aire Protégée du corridor forestier Bongolava et développement des communautés locales.
          </p>
          <div className="socialIcons">
            <Link href="https://www.facebook.com/FBM" passHref className="socialLink" aria-label="Facebook">
              <IconFacebook />
            </Link>
            <Link href="https://www.twitter.com/FBM" passHref className="socialLink" aria-label="Twitter">
              <IconTwitter />
            </Link>
            <Link href="https://www.linkedin.com/company/FBM" passHref className="socialLink" aria-label="LinkedIn">
              <IconLinkedIn />
            </Link>
          </div>
        </div>

        {/* Colonne 2 : Liens Rapides */}
        <div className="colLinks">
          <h5 className="colTitle">Liens Utiles</h5>
          <ul className="linkList">
            <li><Link href="/mission" passHref className="footerLink">Notre Mission</Link></li>
            <li><Link href="/projets" passHref className="footerLink">Nos Projets Clés</Link></li>
            <li><Link href="/statistiques" passHref className="footerLink">Résultats & Impact</Link></li>
            <li><Link href="/partenaires" passHref className="footerLink">Partenaires</Link></li>
          </ul>
        </div>
        
        {/* Colonne 3 : Contact */}
        <div className="colContact">
          <h5 className="colTitle">Contactez-nous</h5>
          <p>
            Adresse : [À insérer - Ex: Siège FBM, Bongolava, Madagascar]
          </p>
          <p>
            Email : <a href="mailto:contact@fbm-maitso.org" className="footerLink">contact@fbm-maitso.org</a>
          </p>
          <p>
            Téléphone : <a href="tel:+26112345678" className="footerLink">+261 XX XX XXX XX</a>
          </p>
        </div>

      </div>
      
      {/* Barre inférieure de Copyright */}
      <div className="footerBottom">
        <p className="copyright">
          &copy; {currentYear} Bongolava Maitso (FBM). Tous droits réservés.
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;