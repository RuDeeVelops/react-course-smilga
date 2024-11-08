const Book = ({ img, title, author, index, id, getBook }) => {
  const handleClick = () => {
    getBook(id);
  };

  return (
    <article className='book'>
      <h1>{index + 1}</h1>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={handleClick}>Click</button>
    </article>
  );
};

export default Book;
