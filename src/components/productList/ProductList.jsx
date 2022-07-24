import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Curiosity to dive-in and dig deep!</h1>
        <p className="pl-desc">
        I have worked on various projects which range from data analytics, to visualisation to machine learning and deep learning. 
        You can also find web-dev comissioned and personal projects
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} title={item.title} desp={item.desp}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
