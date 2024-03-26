

const Button = ({ className, click, name, isDisabled }) => {
  return (
    <div>
      <button className={`${className} ${isDisabled ? 'bg-slate-700 cursor-not-allowed':''}`} onClick={click} disabled={isDisabled} >
        {name}
      </button>
    </div>
  );
};

export default Button;
