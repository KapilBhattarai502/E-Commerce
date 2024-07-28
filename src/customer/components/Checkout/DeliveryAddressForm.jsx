import React from "react";
import Grid from "@mui/material/Grid";
import AddressCard from "../Addresscard/AddressCard";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const DeliveryAddressForm = () => {
  return (
    <div className="">
      <Grid container spacing={4}>
        <Grid
          item
          lg={5}
          xs={12}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-6 py-7  cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="firstName"
                    fullWidth
                    autoComplete="given-name"
                  />
                  
                </Grid>
                
                  <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lasttName"
                    label="lastName"
                    fullWidth
                    autoComplete="given-name"
                  />
                  
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={5}
                  />
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="City"
                    name="City"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="State/Province/Region"
                    name="State/Province/Region"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Zippostal"
                    name="Zippostal"
                    label="Zip / Postal Code"
                    fullWidth
                    autoComplete="given-name"
                  />
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="State/Province/Region"
                    name="Phone Number"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                  
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
