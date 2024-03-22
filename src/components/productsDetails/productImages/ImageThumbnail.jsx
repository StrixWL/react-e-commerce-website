const ImageThumbnail = ({ src, onClick, isSelected }) => {
    return (
      <img
        src={src}
        onClick={onClick}
        className={`w-[150px] mr-10 cursor-pointer ${isSelected ? "border-2 rounded-3xl border-black" : "border-2 border-transparent"}`}
        alt="Product Thumbnail"
      />
    );
  };
  
  export default ImageThumbnail;
  