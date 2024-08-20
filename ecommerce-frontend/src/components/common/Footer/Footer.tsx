import styles from './footer.module.css';

const { footer, footerContent, footerTitle, footerContact } = styles;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2024;
  const displayYear = currentYear === startYear ? startYear : `${startYear} - ${currentYear}`;

  return (
    <footer className={footer}>
      <div className={footerContent}>
        <div>
          <h2 className={footerTitle}>Contact Us</h2>
          <p className={footerContact}>
            Address: 123 eCom Street, City, Country
          </p>
          <p className={footerContact}>
            Email: <a href="mailto:info@zerecomapp.com">info@ecomapp.com</a>
          </p>
          <p className={footerContact}>
            Phone: <a href="tel:+1234567890">+123 456 7890</a>
          </p>
        </div>
        <p>© {displayYear} eCom App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;