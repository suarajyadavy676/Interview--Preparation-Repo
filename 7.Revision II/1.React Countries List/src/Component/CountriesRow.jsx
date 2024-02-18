function CountriesCard({id,country,population,Rank}) {
  // console.log(id, " ",country,population," ",Rank)
  return (
    <tr data-testid="country-card">
      <td>{id}</td>
      <td data-testid="country-card-name">{country}</td>
      <td data-testid="country-card-population">{population}</td>
      <td>{Rank}</td>
    </tr>
  );
}

export default CountriesCard;
