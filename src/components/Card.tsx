import '../styles/main.scss';

interface Props {
  author: string;
  content: string;
  tags: [];
}

function Card({ author, content, tags }: Props) {
  console.log('tags');
  return (
    <>
      <div className="card">
        <div className="info">
          <p className="name">{author}</p>
          <div className="tags">
            {tags ? (
              tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="quote">
          <p className="text">{content}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
