import Typing from "../typing/Typing";

import styles from "./Section0.module.css";

export default function Section0() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrap}>
        <Typing
          text="Кто мы?"
          className={`${styles.title} texturedType`}
        />
      </div>
      <div className={styles.blockWrap}>
        <div className={styles.leftBlock}>
          <Typing
            text="Привет! Меня зовут Давид, я основатель и фронтенд-разработчик проекта Sober Man. У меня за плечами опыт в стартапах, разработке продуктов и управлении. Сейчас я собрался создать что-то по-настоящему важное — приложение, которое может изменить чью-то жизнь."
            className={styles.descr1}
          />
          <Typing
            text="Над мобильной частью проекта будет работать отдельный разработчик. Других участников команды мы планируем нанять в ближайшее время."
            className={styles.descr1}
          />
        </div>
        <div className={styles.rightBlock}>
          <Typing
            text="Sober Man — это не просто идея. Это история, через которую я прошёл сам. Я знаю, каково это — бороться, срываться, собирать себя заново. Именно поэтому я хочу создать инструмент, который реально помогает. Без морализаторства, без шаблонов — с поддержкой, пониманием и настоящей ценностью для человека."
            className={styles.descr2}
          />
        </div>
      </div>
    </div>
  );
}
