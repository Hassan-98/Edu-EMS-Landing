import { useState } from "react";
import cls from "../Contact.module.scss"
import { Grid, TextField, MenuItem, Button } from '@mui/material';
import { object, string, number, date } from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let requestSchema = object({
  fullName: string().required("Please, provide your full name"),
  phone: number("Phone must be a number").required("Please, enter a phone number"),
  emailAddress: string().required("Please, enter a valid email address").email("Please, enter a valid email address"),
  requestType: string().required("Request Type is required"),
  requestDetails: string().required("Please, enter your request details").min(35, "Request details is too short"),
  createdOn: date().default(() => new Date()),
});

const ContactUsForm = () => {
  const [FormData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phone: '',
    requestType: '',
    requestDetails: ''
  })

  const handleChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const submitRequest = async (e) => {
    e.preventDefault();

    try {
      const res = await requestSchema.validate(FormData);
      toast.success('Your Request Submitted');
      setFormData({
        fullName: '',
        emailAddress: '',
        phone: '',
        requestType: '',
        requestDetails: ''
      })
    } catch (e) {
      toast.error(e.message);
    }

  }
  
  return (
    <>
      <form className={cls.contact__form}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              name="fullName"
              label="Full Name"
              variant="outlined"
              color="primary"
              value={FormData.fullName}
              onChange={handleChange}
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="emailAddress"
              label="Email Address"
              variant="outlined"
              color="primary"
              value={FormData.emailAddress}
              onChange={handleChange}
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="phone"
              label="Phone"
              variant="outlined"
              color="primary"
              value={FormData.phone}
              onChange={handleChange}
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="requestType"
              label="Request Type"
              variant="outlined"
              color="primary"
              select
              value={FormData.requestType}
              onChange={handleChange}
              sx={{ width: '100%' }}
            >
              <MenuItem value="RequestDemoVersion" id="requestType">Request Demo Version</MenuItem>
              <MenuItem value="RequestFullVersion">Request Full Version</MenuItem>
              <MenuItem value="ContactUs">Contact Us</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="requestDetails"
              label="Request Details"
              variant="outlined"
              color="primary"
              value={FormData.requestDetails}
              onChange={handleChange}
              sx={{ width: '100%' }}
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined" className={cls.contact__button} onClick={submitRequest}>
              <i className="fa-duotone fa-paper-plane-top"></i>
              Send Request
            </Button>
          </Grid>
        </Grid>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default ContactUsForm
