import Typing from "../typing/Typing";

import styles from "./Section0.module.css";

export default function Section0() {
  return (
    <div className={styles.container}>
      <div className={styles.circle1} />
      <div className={styles.circle2} />
      <Typing
        text="Кто мы?"
        className={`${styles.title} texturedType`}
        showCursor={false}
      />
      <Typing
        text="Привет! Меня зовут Давид, я основатель и фронтенд-разработчик проекта Sober Man. У меня за плечами опыт в стартапах, разработке продуктов и управлении. Сейчас я собрался создать что-то по-настоящему важное — приложение, которое может изменить чью-то жизнь."
        className={`${styles.descr1} descr-l`}
      />
      <Typing
        text="Над мобильной частью проекта будет работать отдельный разработчик. Других участников команды мы планируем нанять в ближайшее время."
        className={`${styles.descr3} descr-l`}
      />
      <Typing
        text="Sober Man — это не просто идея. Это история, через которую я прошёл сам. Я знаю, каково это — бороться, срываться, собирать себя заново. Именно поэтому я хочу создать инструмент, который реально помогает. Без морализаторства, без шаблонов — с поддержкой, пониманием и настоящей ценностью для человека."
        className={`${styles.descr2} descr-l`}
      />
    </div>
  );
}
