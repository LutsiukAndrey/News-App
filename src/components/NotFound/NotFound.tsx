import './NotFound.scss';

import notFound from '../../img/notFound.png';

interface NotFoundProps {
  title: string;
}

const NotFound: React.FC<NotFoundProps> = ({ title }) => {
  return (
    <div className="container not-found">
      <h2 className="not-found__title">{title}</h2>
      <img src={notFound} alt="" className="not-found__img" />
    </div>
  );
};

export default NotFound;
