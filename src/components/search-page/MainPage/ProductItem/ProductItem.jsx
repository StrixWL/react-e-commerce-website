import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import "./ProductItem.css";

const ProductItem = () => {
  return (
    <section className="product-item-section">
      <h3>hello from the product item</h3>
      <Card className="card">
          <Badge
            badgeContent="Sale"
            color="secondary"
            className="badge"
          ></Badge>
        <CardMedia
          className="media motion-reduce"
          component="img"
          src="https://img.freepik.com/free-photo/white-hoodie-with-mask-gloves-protection_23-2148528017.jpg?w=826&t=st=1711113609~exp=1711114209~hmac=2afb04dcd11b6d96cec2b66532a6b8f4640a1c3c5635eff1b4b18a6416483ab9"
          alt="The Spirit of Amazigh Heritage with Our 'Still' Palestine Map T-shirt - Afrika Brand"
        />
        <CardContent className="content">
          <Typography gutterBottom variant="h5" component="h2">
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
