import styles from './ButtonImage.module.scss';
interface Props {
  OnClick(name: string): any;
  src: string;
}

function ButtonImage({ OnClick, src }: Props) {
  return (
    <button className={styles.btn} onClick={() => OnClick('name')}>
      <img className={styles.image} src={src} alt="" />
    </button>
  );
}

export default ButtonImage;
