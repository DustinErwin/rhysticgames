import "./footerCard.css";
import useFadeIn from "../../../hooks/UseFadeIn.js";

//CardLeft has the image on the left
export default function Card() {
  const [ref, show] = useFadeIn();

  return (
    <footer className="site-footer">
      <div ref={ref} className={`footer-inner fade-in ${show ? "show" : ""} fade-delay-2`}>
        <div className="footer-brand">
          <div className="footer-title">Rhystic Games</div>
          <div className="footer-sub">
            A local game store coming soon to Southern New Hampshire
          </div>
        </div>

        <div className="footer-links">
          <a href="https://discord.gg/f72rCvfJ" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          <a
            href="https://www.instagram.com/rhysticgames/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=6158670467954"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Rhystic Games
        </div>
      </div>
    </footer>
  );
}
