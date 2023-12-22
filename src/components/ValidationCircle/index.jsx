import "./styles.css";
const ValidationCircle = ({Color}) => {
    return (
        <>
        <svg
          className="circle mx-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" fill={Color} />
        </svg>
      </>
    )
};

export default ValidationCircle;
