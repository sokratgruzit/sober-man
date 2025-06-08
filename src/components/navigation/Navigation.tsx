import { useAppStore } from "../../store/useAppStore";

import styles from "./Navigation.module.css";

export function Navigation() {
  const { currentSection, setSection } = useAppStore();

  return (
    <div className={styles.container}>
      <button
        onClick={() => setSection(Math.max(0, currentSection - 1))}
        disabled={currentSection === 0}
      >
        Назад
      </button>
      <button
        onClick={() => setSection(Math.min(7, currentSection + 1))}
        disabled={currentSection === 7}
        style={{ marginLeft: 10 }}
      >
        Вперёд
      </button>
    </div>
  );
}
