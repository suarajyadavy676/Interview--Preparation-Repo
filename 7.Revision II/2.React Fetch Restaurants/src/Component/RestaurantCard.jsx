function RestaurantCard({ name,image,type,rating,price_starts_from,number_of_votes }) {
  // console.log(name)
  return (
  <div data-testid="restaurant-card" className="card" >
   {/* display the props */}
   {/* <h1>ID: {id}</h1> */}
   <div id="restaurant-card">
   <h1 data-testid="restaurant-card-name">{name}</h1>
   <h2 data-testid="restaurant-card-type">{type}</h2>
   <img src={image} alt="image" data-testid="restaurant-card-image" />
   <p data-testid="restaurant-card-rating">{rating}</p>
   <p data-testid = "restaurant-card-votes">{number_of_votes}</p>
   <p data-testid = "restaurant-card-price">{price_starts_from}</p>
   </div>
    </div>
  );
}

export default RestaurantCard;
