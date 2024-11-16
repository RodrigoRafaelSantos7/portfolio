import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <section className={styles.hero}>
          <p>Scroll down</p>
        </section>
        <section className={styles.sticky}>
          <div className={styles.col}>
            <div className={styles.services}>
              <div className={styles.indicator}></div>
              <div className={styles.serviceActive}>
                <p>Service 1</p>
              </div>
              <div className={styles.service}>
                <p>Service 2</p>
              </div>
              <div className={styles.service}>
                <p>Service 3</p>
              </div>
              <div className={styles.service}>
                <p>Service 4</p>
              </div>
              <div className={styles.service}>
                <p>Service 5</p>
              </div>
              <div className={styles.service}>
                <p>Service 5</p>
              </div>
              <div className={styles.service}>
                <p>Service 6</p>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.serviceImageWrapper}>
              <div className={styles.serviceImage}>
                <Image src="" alt="Service 1" className={styles.image} />
                <Image src="" alt="Service 1" className={styles.image} />
              </div>
            </div>
            <div className={styles.serviceCopy}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress}></div>
          </div>

          <div className={styles.index}>
            <span className={styles.currentCount}>1</span>
            <span className={styles.separator}></span>
            <span className={styles.totalCount}>6</span>
          </div>
        </section>
        <section className={styles.outro}>
          <p>Outro</p>
        </section>
      </div>
    </main>
  );
}
