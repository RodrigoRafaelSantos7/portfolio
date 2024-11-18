import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
export default function index() {
  const phrase =
    "I am a Full-Stack Developer and UI/UX Designer based in Lisbon, Portugal. As Co-Founder of Quantum Creative Studio and a Bachelors Computer Science student at Nova School of Science and Technology, I blend creative design with technical expertise. My passion lies in Cryptography and Theoretical Computer Science in general, where I am preparing to pursue my Master's degree to further explore these fascinating fields.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>About me</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
