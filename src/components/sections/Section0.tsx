export default function Section0({ onNext, isFirst }: { onNext: () => void; isFirst: boolean }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Добро пожаловать в Sober Man</h1>
      <p>Здесь будет сложная анимация из треугольников, собирающая буквы и слова.</p>
      <button onClick={onNext} style={{ marginTop: "2rem", padding: "0.75rem 1.5rem" }}>
        Начать
      </button>
    </div>
  );
}
