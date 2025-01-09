export function Section({ children, width }) {
  const style = {
    width: width,
  };
  return <section style={style}>{children}</section>;
}
