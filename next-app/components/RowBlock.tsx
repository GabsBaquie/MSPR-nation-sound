// components/RowBlock.tsx
const RowBlock = ({ data }: { data: any }) => {
  return (
    <section>
      <div>{data.content}</div>
    </section>
  );
};

export default RowBlock;
