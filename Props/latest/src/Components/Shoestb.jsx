import Shoes from "./Shoes";
function Shoestb() {
  let sizes = ["6", "7", "8", "10"];
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Shoes
        brand="SNEAKERS"
        name="Fluo M Running Shoes"
        price={500}
        oldPrice={1000}
        discount="50% off"
        image="Sneakers.jpg"
        size={sizes}
      />
      <Shoes
        brand="BOOT"
        name="BHAUKAL SHOES"
        price={750}
        oldPrice={1500}
        discount="50% off"
        image="boot.jpg"
        size={sizes}
      />
      <Shoes
        brand="PVC"
        name="PVC SHOES"
        price={750}
        oldPrice={1500}
        discount="50% off"
        image="Pvc.webp"
        size={sizes}
      />
      <Shoes
        brand="TPU"
        name="Running Shoes"
        price={475}
        oldPrice={950}
        discount="50% off"
        image="TPU Running Shoes.webp"
        size={sizes}
      />
      <Shoes
        brand="WALKING"
        name="Walking Shoes"
        price={0}
        oldPrice={950}
        discount="100% off"
        image="Walking.jpg"
        size={sizes}
      />
    </div>
  );
}
export default Shoestb;
