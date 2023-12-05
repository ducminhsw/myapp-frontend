type Props = {
  className?: string;
};
export default function InfoModal(props: Props) {
  return (
    <section {...props}>
      <div className="bg-blue-500 h-[80px] rounded-t-xl"></div>
      <div className="bg-[#52555e] h-[300px] rounded-b-xl">dat</div>
    </section>
  );
}
