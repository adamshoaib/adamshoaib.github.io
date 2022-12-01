import * as React from "react";
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
            image={data ? data.images : "-"}
          />
          <Typography
            align={"center"}
            sx={{ marginTop: 2, fontWeight: "bold" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {data ? data.name : "-"}
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
              {`${data ? data.apartment_address : "-"}`}
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
                {`${data ? data.model_availability : "-"}`}
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
                {`${data ? data.city : "-"}`}
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
              {`${data ? data.apartment_amenity : "-"}`}
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
              {`${data ? data.community_amenity : "-"}`}
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
              {`${data ? data.college_distance : "-"}`}
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
                {`${data ? data.apartment_rent : "-"}`}
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
                {`${data ? data.contact : "-"}`}
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
                {`${data ? data.baths : "-"}`}
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
                {`${data ? data.beds : "-"}`}
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
                {`${data ? data.cat_policy : "-"}`}
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
                {`${data ? data.dog_policy : "-"}`}
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
                {`${data ? data.model_size : "-"}`}
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
                {`${data ? data.built_in : "-"}`}
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
                {`${data ? data.rent_max : "-"}`}
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
                {`${data ? data.rent_min : "-"}`}
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
                {`${data ? data.transit_score : "-"}`}
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
                {`${data ? data.walk_score : "-"}`}
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
              {`${data ? data.nearby_poi : "-"}`}
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
              {`${data ? data.neightborhood_description : "-"}`}
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
              {`${data ? data.description : "-"}`}
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
