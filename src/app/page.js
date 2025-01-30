import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <li>
        Go to this - <code>localhost:3000/sudo</code>.
      </li>
    </div>
  );
}
