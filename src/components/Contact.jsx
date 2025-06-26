import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
    });
    timeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 0.4,
        yPercent: 100,
        stagger: 0.04,
        ease: "sine.inOut",
      })
      .from("#contact h3 , #contact p", {
        opacity: 0,
        duration: 0.4,
        yPercent: 100,
        stagger: 0.04,
        ease: "sine.inOut",
      })
      .to(
        "#f-right-leaf",
        {
          y: -50,
          duration: 1,
          ease: "circ.inOut",
        },
        0
      )
      .to(
        "#f-left-leaf",
        {
          y: -50,
          duration: 1,
          ease: "circ.inOut",
        },
        0
      );
  }, []);
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />
      <div className="content">
        <h2>Where To Find US</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>
            A-51, Ground floor, Khan market, <br />
            Near Khan market metro station
          </p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>+919876543210</p>
          <p>mojito.shots@gmail.com</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
        
      </div>
      <div className="w-full mb-2 text-[#FCFCFC]/40">&copy;All copyright reserved by Nikhil R with ❤️</div>
      
    </footer>
  );
};
export default Contact;
