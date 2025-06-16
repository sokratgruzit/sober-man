import Typing from "../typing/Typing";

import styles from "./Section1.module.css";

export default function Section1() {
  return (
    <div className={styles.container}>
      <Typing
        text="История проекта"
        className={`${styles.title} texturedType`}
        showCursor={false}
      />
      <div className={styles.blockWrap}>
        <Typing
          text="Идея Sober Man родилась из наблюдения за близкими, которые проходили через сложный путь отказа от алкоголя. После лечения им часто не хватало поддержки, мотивации и ощущение, что они не одни."
          className={`${styles.descr1} descr-l`}
        />
        <Typing
          text="Многие срываются, потому что после клиники их встречает пустота — и мы хотим это изменить."
          className={`${styles.descr2} descr-l`}
        />
      </div>
    </div>
  );
}
