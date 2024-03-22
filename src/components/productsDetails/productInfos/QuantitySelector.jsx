const QuantitySelector = ({ quantity, setQuantity }) => {
    const increment = () => setQuantity(qty => qty + 1);
    const decrement = () => setQuantity(qty => (qty > 1 ? qty - 1 : qty));
  
    return (
      <div className="flex flex-col items-start space-y-2">
        <div className="text-slate-400">Quantity</div>
        <div className="bg-white border text-black px-4 py-3 flex items-center justify-between w-[110px] rounded-3xl">
          <button className="cursor-pointer" onClick={decrement}>-</button>
          <div>{quantity}</div>
          <button className="cursor-pointer" onClick={increment}>+</button>
        </div>
      </div>
    );
  };
  
  export default QuantitySelector;
  