import Typing from "../typing/Typing";

import styles from "./Section3.module.css";

export default function Section3() {
  return (
    <div className={styles.container}>
      <Typing
        text="Зачем это нужно?"
        className={`${styles.title} texturedType`}
        showCursor={false}
      />
      <Typing
        text="Через геймификацию, наставничество, прогресс в фото, подарки от близких и реальные бонусы — мы превращаем трезвость не в страдание, а в приключение с наградой."
        className={`${styles.descr1} descr-l`}
      />
      <div className={styles.blockWrap}>
        <Typing
          text="Алкоголизм — это не просто вредная привычка. Это системная, разрушительная зависимость, которая ежегодно уносит миллионы жизней и разрушает семьи по всему миру. По оценкам Всемирной организации здравоохранения, каждый третий взрослый сталкивался с проблемами, связанными с алкоголем — лично или через близких."
          className={`${styles.descr2} descr-l`}
        />
        <Typing
          text="Многие государства и медицинские учреждения предлагают первичный курс лечения. Это детоксикация, реабилитационные центры, краткосрочные программы. Но вот что происходит потом?"
          className={`${styles.descr3} descr-l`}
        />
      </div>
    </div>
  );
}
