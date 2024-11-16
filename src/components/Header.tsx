import styles from "@/app/styles/nav.module.css";

const NavItem = ({ href, text }: { href: string; text: string }) => {
  return (
    <a href={href}>
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

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Your Name</h1>
      <div className={styles.nav}>
        <NavItem href="https://blog.example.com/" text="Blog" />
        <NavItem href="mailto:your@email.com" text="Contact" />
        <NavItem href="https://linkedin.com/in/yourprofile" text="Linkedin" />
      </div>
    </header>
  );
};

export default Header;
