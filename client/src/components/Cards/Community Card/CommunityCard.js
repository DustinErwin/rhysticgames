import "./communityCard.css";
import DiscordButton from "../../Buttons/DiscordButton/DiscordButton.js";
import useFadeIn from "../../../hooks/UseFadeIn.js";

//CardLeft has the image on the left
export default function Card() {
  const [ref, show] = useFadeIn();

  return (
    <>
      <section className="community">
        <div
          ref={ref}
          className={`community-inner fade-in ${show ? "show" : ""} fade-delay-2`}
        >
          <h2>Help build Rhystic Games</h2>
          <p>
            We’re scouting a location now. Join the Discord for opening updates,
            events, and to help shape what the store becomes.
          </p>

          <DiscordButton></DiscordButton>

          <div className="community-note">
            No spam. Just updates, events, and giveaways.
          </div>
        </div>
      </section>
    </>
  );
}
