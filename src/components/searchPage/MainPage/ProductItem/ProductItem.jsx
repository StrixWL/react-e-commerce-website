import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./ProductItem.css";
import getProductIdByName from "../../../../utils/searchFunctions/getIdFromTitle";

const ProductItem = ({
  title,
  beforeHoverImage,
  afterHoverImage,
  priceBefore,
  priceAfter,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState(beforeHoverImage);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setIsHovered(true);
    setImageSrc(afterHoverImage);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setImageSrc(beforeHoverImage);
  };

  const handleClickTitle = () => {
    const productId = getProductIdByName(title);
    navigate(`/product/${productId}`);
  };

  return (
    <section className="product-item-section">
      <Card
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{"border": "none"}}
      >
        <CardMedia
          className="media motion-reduce"
          component="img"
          src={imageSrc}
          alt={title}
        />
        <CardContent className="content">
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={isHovered ? "underline" : ""}
          >
            <a
              href="#"
              onClick={handleClickTitle}
              className="full-unstyled-link"
            >
              {title}
            </a>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <span className="caption-large light"></span>
            <div className="price price--on-sale">
              <div className="price__container">
                <div className="price__sale">
                  <span>
                    <s className="price-item price-item--regular">
                      {priceBefore}
                    </s>
                    &nbsp;&nbsp;
                  </span>
                  <span className="price-item price-item--sale price-item--last">
                    {priceAfter}
                  </span>
                </div>
              </div>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProductItem;
