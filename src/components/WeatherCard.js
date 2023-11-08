import GrantAccess from "./GrantAccess";

function WeatherCard({ weatherDescription, handleClick }) {
  const toSentence = (string) => {
    if (!string) return;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const description = toSentence(weatherDescription);

  return (
    <div className="flex flex-row m-10 justify-center">
      <GrantAccess
        className="bg-blue m-auto z-10 hover:bg-pink"
        handleClick={handleClick}
      >
        Local Weather
      </GrantAccess>
      {weatherDescription && <h3>Weather today: {description}</h3>}
    </div>
  );
}

export default WeatherCard;
