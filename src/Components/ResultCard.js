import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function ResultCard({ details, seeDetailsClicked }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    const img = details?.images?.split(",");
    if (img && img.length > 0) {
      setImage(img[0]);
    }
  }, []);

  return (
    <Card sx={{ width: 345, marginRight: 5, marginTop: 5 }}>
      <CardMedia
        component="img"
        alt={"Image Not Found !"}
        height="140"
        image={image ? image : "-"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {details.property_name}
        </Typography>
        <div>
          <Typography variant="body2" color="text.secondary">
            {details.apartment_address}
          </Typography>
        </div>
        <Rating name="simple-controlled" value={details.rating} readOnly />
        <div>
          <Typography variant="body2" color="text.secondary">
            {`Max Rent : ${details.rent_max ? details.rent_max : "-"}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Min rent :  ${details.rent_min ? details.rent_min : "-"}`}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            seeDetailsClicked();
          }}
          size="small"
        >
          See Details
        </Button>
      </CardActions>
    </Card>
  );
}
