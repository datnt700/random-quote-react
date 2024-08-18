interface Props {
  OnClick(name: string): any;
  src: string;
}

function ButtonImage({ OnClick, src }: Props) {
  return (
    <button className="btn" onClick={() => OnClick('name')}>
      <img className="image" src={src} alt="" />
    </button>
  );
}

export default ButtonImage;
