import './titleLine.scss';

type titleLineProps = {
    classList: string
    title: string;
    description: string;
    button: string;
}

const titleLine = ({
  classList, title, description, button,
}: titleLineProps) => (
  <div className={classList}>
    <h3>{title}</h3>
    <p>{description}</p>
    <button>{button}</button>
  </div>
);

export default titleLine;
