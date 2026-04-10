import "./Shoes.css";
function Shoes({ brand, name, price, oldPrice, discount, image, size }) {
  let sizes = size.map((value) => value);
  console.log(sizes);

  return (
    <>
      <div className="card">
        <img src={image} alt="shoe" className="shoe-img" />
        <h4 className="brand">{brand}</h4>
        <p className="name"> {name}</p>
        <div className="price-box">
          <span className="price">₹{price}</span>
          <span className="old-price">₹{oldPrice}</span>
          <span className="discount">{discount}</span>
        </div>

        <p className="sizes">Size :{sizes}</p>
      </div>
    </>
  );
}

export default Shoes;
