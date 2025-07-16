import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  color?: "blue" | "red" | "green";
  children?: React.ReactNode;
}

function ButtonComponent({ color = "blue", children = "ボタン" }: ButtonProps) {
  const element = (
    <div className={styles.buttonContent}>
      <div className={styles.buttonInner}>
        <div className={styles.buttonText}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`${styles.button} ${styles[color]}`}
      data-name={`color=${color}`}
    >
      {element}
    </div>
  );
}

export default function Button(props: ButtonProps) {
  return (
    <div data-name="Button">
      <ButtonComponent {...props} />
    </div>
  );
}

export { Button, type ButtonProps };
