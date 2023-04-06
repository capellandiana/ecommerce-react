import "../../styles/ValueCards.css";
import CatAnime from "./CatAnime";

function ValueCards() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="card card-block">
            <img
              src="https://images.unsplash.com/photo-1586216583179-20b23ef9dd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1536&q=80"
              alt="person sewing"
            />
            <h5 className="card-title mt-3 mb-3">Hand Crafted</h5>
            <p className="card-text">
              We believe that handmade products have a special charm and a
              personal touch that cannot be replicated by mass-produced items.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card card-block">
            <img
              src="https://images.unsplash.com/photo-1553545999-8621dce8d75e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt="cat outside"
            />
            <h5 className="card-title  mt-3 mb-3">sustainable</h5>
            <p className="card-text">
              We believe in promoting sustainability by using eco-friendly
              materials, reducing waste, and sourcing materials locally whenever
              possible.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card card-block">
            <img
              src="https://images.unsplash.com/photo-1628783592539-cef32fec57e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="cat on scratching post"
            />
            <h5 className="card-title  mt-3 mb-3">High Quality</h5>
            <p className="card-text">
              From cozy beds to playful toys and accessories, every product in
              our collection is carefully crafted with attention to detail and a
              commitment to excellence.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card card-block">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="person writing"
            />
            <h5 className="card-title  mt-3 mb-3">Beautiful Design</h5>
            <p className="card-text">
              Our talented artisans are dedicated to crafting high-quality cat
              items that are both functional and stylish.
            </p>
          </div>
        </div>
      </div>
      <h1>Featured Cats</h1>
      <CatAnime />
      
    </div>
  );
}
export default ValueCards;
