import styles from "./Section1.module.css";

export default function Section1() {
  return (
    <div className={styles.container}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Вторая секция</h2>
      <p>Анимация будет строиться из другой композиции треугольников.</p>
    </div>
  );
}
