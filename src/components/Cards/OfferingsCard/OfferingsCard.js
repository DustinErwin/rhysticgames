import "./offeringsCard.css";
import useFadeIn from "../../../hooks/UseFadeIn.js";

//CardLeft has the image on the left
export default function Card() {
  const [ref, show] = useFadeIn();

  return (
    <>
      <section className="offerings">
        <div
          ref={ref}
          className={`offerings-inner fade-in ${show ? "show" : ""} fade-delay-2`}
        >
          <h2>What you’ll find at Rhystic Games</h2>
          <div className="offerings-rule" />

          <div className="offerings-grid">
            <div className="card">
              <h3>Magic: The Gathering</h3>
              <p>Commander, Draft, prereleases, and a place to play.</p>
            </div>
            <div className="card">
              <h3>Tabletop & Miniatures</h3>
              <p>Warhammer, Battletech, hobby time, and battles.</p>
            </div>
            <div className="card">
              <h3>Board Games</h3>
              <p>New favorites, classics, and game-night staples.</p>
            </div>
            <div className="card">
              <h3>Roleplaying Games</h3>
              <p>D&amp;D, Pathfinder, and campaigns worth remembering.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
