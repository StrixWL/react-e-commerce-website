const SizeSelector = ({ selectedSize, setSelectedSize }) => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <label htmlFor="size-select" className="text-slate-400">
        Size
      </label>
      <select
        id="size-select"
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        className="bg-white border text-black px-4 py-2 rounded-2xl cursor-pointer"
      >
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="2XL">2XL</option>
      </select>
    </div>
  );
};

export default SizeSelector;
