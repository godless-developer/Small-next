const Btn = () => {
  return (
    <div className="numbers">
      {buttonItems.map((props) => {
        return (
          <div className="number">
            <p>{props.number}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Btn;
