function ProductsArray() {
    const Products = [
        {
        "id": 1,
        "title": "Wall Hammock",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61dja1ypYCL._AC_SL1500_.jpg",
        "info": "Handmade cat bed, for sleeping and lounging",
        "price": "57.00"
        },
        {
        "id": 2,
        "title": "Scratching Pad",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61lTm2a2tZS._AC_SL1200_.jpg",
        "info": "Durable scratchpad, dual sided, recyclable",
        "price": "20.00"
        },
        {
        "id": 3,
        "title": "Litterbox",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71hyWHLYiiL._AC_SL1500_.jpg",
        "info": "Luxury hidden cat litterbox furniture",
        "price": "370.00"
        },
        {
        "id": 4,
        "title": "Tofu Litter",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71EABYScv0L._AC_SL1500_.jpg",
        "info": "Biodegradable, flushable litter. Pack of 2 6lbs each",
        "price": "42.00"
        },
        {
        "id": 5,
        "title": "Laser Pointer",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61Ko-1oQXLL._AC_SL1080_.jpg",
        "info": "High power rechargable laser pointer",
        "price": "39.00"
        },
        {
        "id": 6,
        "title": "Meow Cat Food",
        "image": "https://image.chewy.com/is/image/catalog/263631_MAIN._AC_SL1200_V1608266264_.jpg",
        "info": "Natural cat food, Wild venison grain-free",
        "price": "38.00"
        },
        {
        "id": 7,
        "title": "Wooden TV Bed",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61Nz2EWIL-S._AC_SL1200_.jpg",
        "info": "TV bed made with cocobolo wood",
        "price": "260.00"
        },
        {
        "id": 8,
        "title": "Cat Wheel",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/719lQ7kf5RL._AC_SL1500_.jpg",
        "info": "Exercise wheel for cat fitness",
        "price": "279.00"
        },
        {
        "id": 9,
        "title": "Catnip Toy",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61C7HbwlJPL._AC_SL1000_.jpg",
        "info": "3piece toy edible cat licking toy",
        "price": "20.00"
        },
        {
        "id": 10,
        "title": "Cat Condo",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71bXi-oz6eL._AC_SL1500_.jpg",
        "info": "54in cat tree for indoor cats, multi level cat furniture with scratching post and cat toys in dark gray",
        "price": "389.00"
        },
        {
        "id": 11,
        "title": "Cat Backpack Carrier",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61pUFYQ5iKL._AC_SL1332_.jpg",
        "info": "Ventilated backpack with fan and light",
        "price": "80.00"
        },
        {
        "id": 23,
        "title": "Bread Catnip Toys",
        "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71CQ02452AL._AC_SL1500_.jpg",
        "info": "Set of 6 bread toys with catnip",
        "price": "25.00"
        }
        ]
    return (
        <div>
        <div className="shoppingcontainer">
        {Products.map((Products) => (
          <div className="item" key={Products.id}>
            {Products.image && <img src={Products.image} alt="" />}
            <h2>{Products.title}</h2>
            <p>{Products.info}</p>
            <p>${Products.price}</p>
          </div>
        ))}
      </div>
      </div>
    )

}
export default ProductsArray;