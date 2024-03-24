import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./ProductItem.css";

const ProductItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    "https://afrikabrand.com/cdn/shop/files/1-3a88699d-eb75-4906-86ae-349ce6ca020d-_1.png?v=1700771482&width=600"
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Change the image source when hovering
    setImageSrc(
      "https://afrikabrand.com/cdn/shop/files/2-18866ab0-a1e4-4d83-9944-f72749d29bba-_2.png?v=1700771484&width=360"
    );
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Change the image source back to default when not hovering
    setImageSrc(
      "https://afrikabrand.com/cdn/shop/files/1-3a88699d-eb75-4906-86ae-349ce6ca020d-_1.png?v=1700771482&width=600"
    );
  };
  return (
    <section className="product-item-section">
      <Card className="card" onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
        <CardMedia
          className="media motion-reduce"
          component="img"
          src={imageSrc}
          alt="The Spirit of Amazigh Heritage with Our 'Still' Palestine Map T-shirt - Afrika Brand"
        />
        <CardContent className="content">
          <Typography gutterBottom variant="h5" component="h2" className={isHovered ? "underline" : ""}>
            <a
              href="/products/the-spirit-of-amazigh-heritage-with-our-still-palestine-map-t-shirt?_pos=1&amp;_sid=2ed2b81dd&amp;_ss=r&amp;variant=46900749599024"
              className="full-unstyled-link"
            >
              The Spirit of Amazigh Heritage with Our Palestine Map T-shirt
            </a>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <span className="caption-large light"></span>
            <div className="price price--on-sale">
              <div className="price__container">
                <div className="price__sale">
                  <span>
                    <s className="price-item price-item--regular">€85,22</s>
                    &nbsp;&nbsp;
                  </span>
                  <span className="price-item price-item--sale price-item--last">
                    €29,50
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
