// components/ArticleBlock.tsx
const ArticleBlock = ({ data }: { data: any }) => {
  return (
    <section>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </section>
  );
};

export default ArticleBlock;
