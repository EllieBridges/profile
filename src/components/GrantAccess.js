import Button from "./Button";

function GrantAccess({ handleClick }) {
  return (
    <Button className="bg-blue m-auto z-10" handleClick={handleClick}>
      Add Local Weather
    </Button>
  );
}
export default GrantAccess;
