import styles from "./member.module.css";

export default function Member() {
  return (
    <>
      <div
        className={styles.memberbody}
        style={{ backgroundImage: "/Members/cartographer.png" }}
      >
        <h1>This shall work</h1>
      </div>
    </>
  );
}
