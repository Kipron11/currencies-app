import './buttons-2-line.scss';

type Buttons2Props = {
    id: string
    title: string
    background: string
}

const Buttons2 = ({ id, title, background }: Buttons2Props) => (
  <button style={{ backgroundColor: background }} className="buttons-2-line">
    {title}
  </button>
);

export default Buttons2;
