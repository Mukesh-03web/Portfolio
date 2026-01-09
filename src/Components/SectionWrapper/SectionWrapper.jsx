export default function SectionWrapper({ children, id }) {
  return (
    <section id={id} className="section-wrapper">
      {children}
    </section>
  );
}