import './navigation.scss';

type HeadingProps = {
    text: string
}

const Navigation = ({ text }: HeadingProps) => (
  <a href="http://youtube.com" className="navigation">
    {text}
  </a>
);

export default Navigation;
