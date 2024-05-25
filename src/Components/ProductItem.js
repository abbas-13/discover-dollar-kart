import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const ProductItem = ({ product }) => {
  return (
    <Card>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        size="sm"
        sx={{
          position: "absolute",
          top: "0.875rem",
          right: "0.5rem",
          zIndex: "1",
        }}
      >
        <FavoriteBorderIcon color="error" />
      </IconButton>
      <AspectRatio>
        <img src={product.image} loading="lazy" alt="" />
      </AspectRatio>
      <Typography level="title-lg">{product.title}</Typography>
      <CardContent
        sx={{ display: "grid", gridTemplateColumns: "1fr" }}
        orientation="horizontal"
      >
        <div>
          <Typography level="body-xs">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {product.price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
};
