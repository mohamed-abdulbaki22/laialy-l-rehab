import { Link } from "react-router-dom";

const Card = ({ id, img, title, description,path }) => {
  return (
    <div className="card" key={id}>
      <Link to={`/${path}/${id}`}>
        <img src={img} />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;