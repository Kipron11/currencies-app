import './imageline.scss';

type imageLineProps = {
    picture: string
}

const ImageLine = ({ picture }: imageLineProps) => (
  <img src={picture} alt="pic" className="img" />
);

export default ImageLine;
