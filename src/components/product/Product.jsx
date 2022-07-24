import "./product.css";

const Product = ({img,link,title, desp}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div>
      <h4 className="card-title">{title}</h4>
      <p className="card-text text-secondary">
                {desp}
            </p>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="HELLLO" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
