import SocialIcons from "./SocialIcons";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      <SocialIcons />
      <p class="footer-text">Copyright &copy; {currentYear} by <a class="footer-link" href="https://github.com/Ferlandoo">Ferlando.me</a></p>
    </footer>
  );
};

export default Footer;
