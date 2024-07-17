import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAlertContext } from "../context/AlertContext";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spinner,
} from "@chakra-ui/react";

const BookingForm = (props) => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const availableTimes = props.availableTimes;
  const [isLoading, setIsLoading] = useState(false);
  const { onOpen, onClose } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guest: 0,
      occasion: "",
      name: "",
      email: "",
      note: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await props.submitAPI(values);
        props.setBookData({ ...values, type: "update" });
        setIsLoading(false);
        onOpen("success", "Your Reservation has been confirmed");
        await wait(1500);
        onClose();
      } catch (error) {
        setIsLoading(false);
        onOpen("failed", "Your Reservation has been failed!");
        console.log(error);
        throw new Error();
      }
    },
    validationSchema: Yup.object().shape({
      date: Yup.date().required("Required!"),
      time: Yup.string().required("Required!"),
      guest: Yup.number().integer().max(10, "Maximum guest is 10")
        .required("Required!"),
      occasion: Yup.string().required("Required!"),
      name: Yup.string().min(4, 'Must be 4 characters or less').max(25, 'Must not exceed 25 characters or less').required("Required!"),
      email: Yup.string().email("Invalid email!").required("Required!"),
      note: Yup.string().max(120, 'Must not exceed 120 characters or less').required("Required!"),
    }),
  });

  const dateChange = (e) => {
    props.dispatch({ date: e.target.value });
    formik.setFieldValue("date", e.target.value);
  };

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
              <h1 className="markazi-subtitle m-0 color-primary-yellow text-center sm-d-none">
                Reserve Your Table at Little Lemon
              </h1>
              <h1 className="markazi-subtitle m-0 color-primary-yellow text-center testimoni-subtitle lg-d-none">
                Reserve Your Table
              </h1>
              <form onSubmit={formik.handleSubmit} className="mt-3">
                <VStack spacing={4}>
                  <FormControl
                    isInvalid={formik.errors.date && formik.touched.date}
                  >
                    <FormLabel htmlFor="date">Choose Date</FormLabel>
                    <Input
                      id="date"
                      name="date"
                      aria-label="Choose Date"
                      aria-required="true"
                      type="date"
                      value={formik.values.date}
                      onChange={dateChange}
                    />
                    {formik.errors.date && formik.touched.date ? (
                      <FormErrorMessage aria-errormessage={formik.errors.date}>
                        {formik.errors.date}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl
                    isInvalid={formik.errors.time && formik.touched.time}
                  >
                    <FormLabel htmlFor="time">Time</FormLabel>
                    <Select
                      id="time"
                      name="time"
                      aria-label="Time"
                      aria-required="true"
                      value={formik.values.time}
                      onChange={formik.handleChange}
                    >
                      <option className="color-sec-black" value="">
                        _ _ : _ _
                      </option>
                      {availableTimes.map((vTime, iTime) => {
                        return (
                          <option
                            key={iTime}
                            className="color-sec-black"
                            value={vTime}
                          >
                            {vTime}
                          </option>
                        );
                      })}
                    </Select>
                    {formik.errors.time && formik.touched.time ? (
                      <FormErrorMessage aria-errormessage={formik.errors.time}>
                        {formik.errors.time}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl
                    isInvalid={formik.errors.guest && formik.touched.guest}
                  >
                    <FormLabel htmlFor="guest">Number of Guest</FormLabel>
                    <NumberInput
                      defaultValue={0}
                      min={1}
                      max={10}
                      aria-label="Number of Guest"
                      aria-required="true"
                      id="guest"
                      name="guest"
                      clampValueOnBlur={false}
                    >
                      <NumberInputField
                        value={formik.values.guest}
                        onChange={formik.handleChange}
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    {formik.errors.guest && formik.touched.guest ? (
                      <FormErrorMessage aria-errormessage={formik.errors.guest}>
                        {formik.errors.guest}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl
                    isInvalid={
                      formik.errors.occasion && formik.touched.occasion
                    }
                  >
                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                    <Select
                      id="occasion"
                      name="occasion"
                      aria-label="Occasion"
                      aria-required="true"
                      value={formik.values.occasion}
                      onChange={formik.handleChange}
                    >
                      <option className="color-sec-black" value="">
                        Choose Occasion
                      </option>
                      <option className="color-sec-black" value="Birthday">
                        Birthday
                      </option>
                      <option className="color-sec-black" value="Anniversary">
                        Anniversary
                      </option>
                    </Select>
                    {formik.errors.occasion && formik.touched.occasion ? (
                      <FormErrorMessage
                        aria-errormessage={formik.errors.occasion}
                      >
                        {formik.errors.occasion}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl
                    isInvalid={formik.errors.name && formik.touched.name}
                  >
                    <FormLabel htmlFor="name">Full Name</FormLabel>
                    <Input
                      id="name"
                      name="name"
                      aria-label="Full Name"
                      aria-required="true"
                      placeholder="eg. Sophia Latjuba"
                      type="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <FormErrorMessage aria-errormessage={formik.errors.name}>
                        {formik.errors.name}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl
                    isInvalid={formik.errors.email && formik.touched.email}
                  >
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                      id="email"
                      name="email"
                      aria-label="Email Address"
                      aria-required="true"
                      placeholder="example@domain.com"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <FormErrorMessage aria-errormessage={formik.errors.email}>
                        {formik.errors.email}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl
                    isInvalid={formik.errors.note && formik.touched.note}
                  >
                    <FormLabel htmlFor="note">Note Reservation</FormLabel>
                    <Textarea
                      id="note"
                      name="note"
                      aria-label="Note Reservation"
                      aria-required="true"
                      height={150}
                      value={formik.values.note}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.note && formik.touched.note ? (
                      <FormErrorMessage aria-errormessage={formik.errors.note}>
                        {formik.errors.note}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <Button
                    isDisabled={isLoading}
                    type="submit"
                    aria-label="On Click"
                    aria-required="true"
                    width="full"
                    className="btn-submit bg-primary-yellow"
                  >
                    Make Your Reservation
                    {isLoading ? <Spinner ml="1rem" /> : null}
                  </Button>
                </VStack>
              </form>
            </Box>
          </div>

          <div className="col-2 col-sm-1"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
