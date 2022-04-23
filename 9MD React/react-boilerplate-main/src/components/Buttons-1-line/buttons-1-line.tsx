import './buttons-1-line.scss';

type Buttons1Props = {
    text: string
}

const Buttons1 = ({ text }: Buttons1Props) => (
  <button className="buttons-1-line">
    {text}
  </button>
);

export default Buttons1;
