import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";



function DBProducts() {
    const [Products2, setProducts2] = useState([]);

  useEffect(() => {
    const fetchAllProducts2 = async () => {
      try {
        const res = await axios.get("http://localhost:8800/shop");

        setProducts2(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts2();
  }, []);
    return (
        <div className="shoppingcontainer">
        {Products2.map((Products2) => (
          <div className="item" key={Products2.id}>
            {Products2.image && <img src={Products2.image} alt="" />}
            <h2>{Products2.title}</h2>
            <p>{Products2.info}</p>
            <p>${Products2.price}</p>
          </div>
        ))}
      </div>
    )

}
export default DBProducts;