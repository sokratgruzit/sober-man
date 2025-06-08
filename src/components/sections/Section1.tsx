export default function Section1({ onNext, onPrev, isFirst, isLast }: { onNext: () => void; onPrev: () => void; isFirst: boolean; isLast: boolean }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Вторая секция</h2>
      <p>Анимация будет строиться из другой композиции треугольников.</p>
      <div style={{ marginTop: "2rem" }}>
        {!isFirst && <button onClick={onPrev} style={{ marginRight: "1rem" }}>Назад</button>}
        {!isLast && <button onClick={onNext}>Вперед</button>}
      </div>
    </div>
  );
}
