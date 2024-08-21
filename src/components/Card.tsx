import styles from './Card.module.scss';

interface Props {
  author: string;
  content: string;
  tags: [];
}

function Card({ author, content, tags }: Props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.info}>
          <p className={styles.name}>{author}</p>
          <div className={styles.tags}>
            {tags ? (
              tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={styles.quote}>
          <p className={styles.text}>{content}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
