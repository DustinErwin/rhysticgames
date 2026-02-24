import "./IntroCard.css";
import useFadeIn from "../../../hooks/UseFadeIn";

export default function Intro() {
  const [ref, show] = useFadeIn();

  return (
    <section  className="about" >
      <div ref ={ref} className={`about-inner fade-in ${show ? "show" : ""} fade-delay-2`}>
        <h2>Built for players. Built for community.</h2>
        <div className="about-rule" />
        <p>
          Rhystic Games is a new local game store in development, created with
          one goal in mind — to build a welcoming space where players of all
          kinds can gather, play, and belong.
        </p>
        <p>
          From casual Commander nights and tabletop battles to board games and
          role-playing adventures, Rhystic Games is being built around the
          people who play there.
        </p>
        <p>
          We’re still early in the journey, but we’re building this the right
          way — with the community involved from day one.
        </p>
      </div>
    </section>
  );
}
