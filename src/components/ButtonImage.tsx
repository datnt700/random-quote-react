import styles from './ButtonImage.module.scss';
interface Props {
  onclick(name: string): any;
  src: string;
}

function ButtonImage({ onclick, src }: Props) {
  return (
    <button className={styles.btn} onClick={() => onclick('name')}>
      <img className={styles.image} src={src} alt="" />
    </button>
  );
}

export default ButtonImage;
