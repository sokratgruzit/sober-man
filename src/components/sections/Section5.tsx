import Typing from "../typing/Typing";

import styles from "./Section5.module.css";

export default function Section5() {
  return (
    <div className={styles.container}>
      <Typing
        text="Куда пойдут средства?"
        className={`${styles.title} texturedType`}
        showCursor={false}
      />
      <div className={styles.blockWrap}>
        <div className={`${styles.descr1} descr-l`}>💻 Зарплату мобильному разработчику</div>
        <div className={`${styles.descr1} descr-l`}>🧠 Интеграцию ИИ (OpenAI / Claude API)</div>
        <div className={`${styles.descr1} descr-l`}>🧪 UX и тестирование</div>
        <div className={`${styles.descr1} descr-l`}>☁️ Серверы, фото-хранилище и безопасность данных</div>
        <div className={`${styles.descr1} descr-l`}>📢 Подготовку к запуску: сайт, соцсети, видео какая </div>
      </div>
    </div>
  );
}
