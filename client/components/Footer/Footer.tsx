import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <Link href={'/flights'}>
        <Image
          src="/footer-logo.svg"
          width={150}
          height={60}
          alt="NextSpace Logo"
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;