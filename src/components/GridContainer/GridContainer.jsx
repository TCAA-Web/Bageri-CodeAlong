import style from "./GridContainer.module.scss";

export function GridContainer({ children, columns, sx }) {
  const inlinestyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <div className={style.grid} style={{ ...inlinestyle, ...sx }}>
      {children}
    </div>
  );
}
