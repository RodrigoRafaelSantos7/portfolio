"use client";

import styles from "@/app/styles/nav.module.css";

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <a target="_blank" href={href} rel="noopener noreferrer">
      <div className={styles.wavyPhraseContainer}>
        <div className={styles.wavyPhrase}>
          {text.split("").map((letter, index) => (
            <p key={index}>{letter}</p>
          ))}
        </div>
        <div className={styles.wavyPhrase}>
          {text.split("").map((letter, index) => (
            <p key={`clone-${index}`}>{letter}</p>
          ))}
        </div>
      </div>
    </a>
  );
};

const WavyNav = () => {
  return (
    <div className={styles.nav}>
      <NavLink href="https://blog.example.com/" text="Blog" />
      <NavLink href="mailto:your@email.com" text="Contact" />
      <NavLink href="https://linkedin.com/in/yourprofile" text="Linkedin" />
    </div>
  );
};

export default WavyNav;
