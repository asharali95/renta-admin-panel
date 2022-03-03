import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import CarPackagesTable from "../../Components/carPackagesTable/CarPackagesTable";

const CarDetails = ({ cars }) => {
  const { carId } = useParams();
  const [car, setCar] = useState({});
  useEffect(() => {
    setCar(cars?.find(({ _id }) => _id === carId));
  }, []);

  return (
    <Container maxWidth="lg" style={{ margin: "30px auto" }}>
      <Grid container>
        <Grid item xs={12} direction="column">
          <Typography variant="h4" component="div">
            Car Id: {carId}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <hr />
          <Typography variant="h5" component="div">
            Car Details
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <img src={`${car?.carImg}`} width="100%"></img>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h4" component="div">
            {car?.carName}
          </Typography>
          <Typography variant="body1" component="div">
            <Grid container>
              <Grid item xs={6}>
                <h3>Car Model</h3>
                {car?.model}
              </Grid>
              <Grid item xs={6}>
                <h3>Car Category</h3>
                {car?.category}
              </Grid>
              <Grid item xs={6}>
                <h3>Car Late Charges</h3>
                {car?.lateCharges}
              </Grid>
              <Grid item xs={6}>
                <h3>Car Color</h3>
                {car?.color}
              </Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <hr />
          <Typography variant="h5" component="div">
            Package Details
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100%" }}
        >
          {car?.packages ? (
            <Grid item xs={8}>
              <CarPackagesTable packages={car?.packages} />
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
};
var mapState = (state) => ({ cars: state.car });

export default connect(mapState)(CarDetails);
