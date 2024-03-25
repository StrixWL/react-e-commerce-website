

const Button = ({ className, click, name }) => {
  return (
    <div>
      <button className={className} onClick={click}>
        {name}
      </button>
    </div>
  );
};

export default Button;
