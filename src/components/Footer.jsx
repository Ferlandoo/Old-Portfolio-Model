import SocialIcons from "./SocialIcons";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      <SocialIcons />
      <p class="footer-text">Copyright &copy; 2023 - {currentYear} by <a class="footer-link" href="https://ferlando.me/">Ferlando.me</a></p>
    </footer>
  );
};

export default Footer;
