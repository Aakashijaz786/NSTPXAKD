export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-max">{children}</div>
    </section>
  );
}
