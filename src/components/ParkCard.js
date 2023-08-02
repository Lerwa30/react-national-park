const ParkCard = (props) => {
  console.log(props.fullName);
  return (
    <div>
      <h3>{props.park.fullName}</h3>
      <h4>{props.park.weatherInfo}</h4>
    </div>
  );
};

export default ParkCard;
