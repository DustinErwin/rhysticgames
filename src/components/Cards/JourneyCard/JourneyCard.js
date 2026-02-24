import "./journeyCard.css";
import useFadeIn from "../../../hooks/UseFadeIn.js";

//CardLeft has the image on the left
export default function Card() {
  const [ref, show] = useFadeIn();

  return (
    <section className="timeline">
      <div
        ref={ref}
        className={`timeline-inner fade-in ${show ? "show" : ""} fade-delay-2`}
      >
        <h2>The Journey</h2>
        <div className="timeline-rule" />

        <div className="timeline-grid">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Location Hunt</h3>
            <p>We’re scouting the right spot in New Hampshire.</p>
          </div>

          <div className="step">
            <div className="step-num">2</div>
            <h3>Build the Community</h3>
            <p>Events, feedback, and hype start in the Discord.</p>
          </div>

          <div className="step">
            <div className="step-num">3</div>
            <h3>Grand Opening</h3>
            <p>
              Opening date and launch events announced as soon as it’s locked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
