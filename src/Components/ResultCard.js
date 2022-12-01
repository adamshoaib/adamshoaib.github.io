import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function ResultCard({ details, seeDetailsClicked }) {
  console.log("details : 1", details);
  return (
    <Card sx={{ width: 345, marginRight: 5, marginTop: 5 }}>
      <CardMedia
        component="img"
        alt={"Image Not Found !"}
        height="140"
        image={details ? details.images : "-"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {details.name}
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
