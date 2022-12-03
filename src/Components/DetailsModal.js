import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

export default function DetailsModal({ isOpen = false, data, closeModal }) {
  const [open, setOpen] = React.useState(isOpen);
  const [image, setImage] = useState("");
  useEffect(() => {
    const img = data?.images?.split(",");
    if (img && img.length > 0) {
      setImage(img[0]);
    }
  }, [data]);
  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log("Im here close modal");
    closeModal();
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            alt={"Image Not Found !"}
            height="140"
            image={image ? image : "-"}
          />
          <Typography
            align={"center"}
            sx={{ marginTop: 2, fontWeight: "bold" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {data.property_name ? data.property_name : "-"}
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <a>{`${data.url ? data.url : "No url found !"}`}</a>
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {`${data.apartment_address ? data.apartment_address : "-"}`}
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`Availability`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.model_availability ? data.model_availability : "-"}`}
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`City`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.city ? data.city : "-"}`}
              </Typography>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              {`Apartment Amenity`}
            </Typography>
            <Typography id="modal-modal-description" sx={{}}>
              {`${data.apartment_amenity ? data.apartment_amenity : "-"}`}
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              {`Community Amenity`}
            </Typography>
            <Typography id="modal-modal-description" sx={{}}>
              {`${data.community_amenity ? data.community_amenity : "-"}`}
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              {`College Distance`}
            </Typography>
            <Typography id="modal-modal-description" sx={{}}>
              {`${data.college_distance ? data.college_distance : "-"}`}
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`Rent`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.apartment_rent ? data.apartment_rent : "-"}`}
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`Contact`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.contact ? data.contact : "-"}`}
              </Typography>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`Baths`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.baths ? data.baths : "-"}`}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`beds`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.beds ? data.beds : "-"}`}
              </Typography>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`Cat Policy`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.cat_policy ? data.cat_policy : "-"}`}
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`Dog Policy`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.dog_policy ? data.dog_policy : "-"}`}
              </Typography>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`Model Size`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.model_size ? data.model_size : "-"}`}
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`Built In`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.built_in ? data.built_in : "-"}`}
              </Typography>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`Max Rent`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.rent_max ? data.rent_max : "-"}`}
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`Min Rent`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.rent_min ? data.rent_min : "-"}`}
              </Typography>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`Transit Score`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.transit_score ? data.transit_score : "-"}`}
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {`Walk Score`}
              </Typography>
              <Typography id="modal-modal-description" sx={{}}>
                {`${data.walk_score ? data.walk_score : "-"}`}
              </Typography>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              {`Nearby`}
            </Typography>
            <Typography id="modal-modal-description" sx={{}}>
              {`${data.nearby_poi ? data.nearby_poi : "-"}`}
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              {`Neightborhood Description`}
            </Typography>
            <Typography id="modal-modal-description" sx={{}}>
              {`${data.neightborhood_description ? data.neightborhood_description : "-"}`}
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              {`Description`}
            </Typography>
            <Typography id="modal-modal-description" sx={{}}>
              {`${data.description ? data.description : "-"}`}
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
