import React from "react";
import { Box, Button, VStack, FormLabel } from "@chakra-ui/react";

const BookingConfirmed = (props) => {
  const closePage = () => {
    props.setBookData({ type: "close" });
  };

  const dataBook = props.bookData;

  return (
    <div className="booking width-100 bg-primary-green">
      <div className="container">
        <div className="row">
          <div className="col-2 col-sm-1"></div>

          <div className="col-8 col-sm-10">
            <Box p={6} rounded="md" w="100%" className="color-sec-white">
              <h1 className="karla-p fz-16 m-0 color-sec-white text-center">
                Booking Page
              </h1>
              <h1 className="markazi-subtitle m-0 mb-2 color-primary-yellow text-center sm-d-none">
                Your Table Reservation Confirmed
              </h1>
              <h1 className="markazi-subtitle m-0 mb-2 color-primary-yellow text-center testimoni-subtitle lg-d-none">
                Reservation Confirmed
              </h1>
              <VStack spacing={4} mb="2rem">
                <FormLabel>
                  Date - Time : {dataBook.date} - {dataBook.time}
                </FormLabel>
                <FormLabel>Number of Guest : {dataBook.guest}</FormLabel>
                <FormLabel>Occasion : {dataBook.occasion}</FormLabel>
                <FormLabel>Full Name : {dataBook.name}</FormLabel>
                <FormLabel>Email Address : {dataBook.email}</FormLabel>
                <FormLabel>Note Reservation : {dataBook.note}</FormLabel>
              </VStack>
              <Button
                aria-label="Close"
                width="full"
                className="btn-submit bg-primary-yellow"
                onClick={closePage}
              >
                Close
              </Button>
            </Box>
          </div>

          <div className="col-2 col-sm-1"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmed;
