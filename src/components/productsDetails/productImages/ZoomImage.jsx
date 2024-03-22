import { useState } from "react";

const ZoomImage = ({ src, alt }) => {
  const [zoom, setZoom] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setZoom(true)}
      onMouseLeave={() => setZoom(false)}
      onMouseMove={handleMouseMove}
      style={{ width: "100%", height: "auto" }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto cursor-zoom-in object-cover rounded-lg ${
          zoom ? "opacity-100" : ""
        }`}
      />
      {zoom && (
        <div
          className="absolute top-10 left-10 inset-0 bg-no-repeat bg-cover"
          style={{
            ...zoomStyle,
            backgroundImage: `url(${src})`,
            backgroundSize: "300%",
            width: "150px", 
            height: "150px",
            transform: "translate(-50%, -50%)",
            left: `${zoomStyle.x}%`,
            top: `${zoomStyle.y}%`,
          }}
        ></div>
      )}
    </div>
  );
};
export default ZoomImage