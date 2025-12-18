// components/Footer.js
import React from 'react';
import './styles/hero.css';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter } from "lucide-react";

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
            <Link href="https://www.facebook.com/profile.php?id=100087973928660" passHref className="socialLink" aria-label="Facebook">
              <Facebook />
            </Link>
            <Link href="https://www.twitter.com/FBM" passHref className="socialLink" aria-label="Twitter">
              <Twitter />
            </Link>
            <Link href="https://www.linkedin.com/company/FBM" passHref className="socialLink" aria-label="LinkedIn">
              <Linkedin />
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
            Adresse : Port-Bergé, Région Sofia Madagascar
          </p>
          <p>
            Email : <a href="mailto:contact@fbm-maitso.org" className="footerLink">cyprien@bongolavamaitso.mg</a>
          </p>
          <p>
            Téléphone : <a href="tel:+26112345678" className="footerLink">+261 34 73 805 99</a>
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