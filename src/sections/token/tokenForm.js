
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Checkbox as MuiCheckbox,
} from "@mui/material";

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import network from '../../networks.json'
import { useState } from "react";



const tokens = [
  {
    value: 'global',
    label: 'Global',
  },
  {
    value: 'mannual',
    label: 'Mannual',
  }
];

const TokenForm = () => {

  const [open, setOpen] = useState({
    Binance: false,
    Ethereum: false,
    Tron: false
  })

  const schema = yup.object().shape({
    coinName: yup.string().required("This field is required"),
    confirmation: yup.number().positive().typeError('Amount must be a number'),
    decimal: yup.number().positive().typeError('Amount must be a number'),
    image: yup.mixed().required("Image is required"),
    fullName: yup.string().required("This field is required"),
    minimumWithdraw: yup.string().required("This field is required"),
    select: yup.string().required("This field is required"),
    Binance : yup.object().shape({
      decimalNum: yup.number().positive(),
      fee: yup.number().positive(),
      contract: yup.string(),
      abi: yup.string()
    }),
    Ethereum : yup.object().shape({
      decimalNum: yup.number().positive(),
      fee: yup.number().positive(),
      contract: yup.string(),
      abi: yup.string()
    }),
    Tron : yup.object().shape({
      decimalNum: yup.number().positive(),
      fee: yup.number().positive(),
      contract: yup.string(),
      abi: yup.string()
    }),



    // chooseCb: yup.array().required("Field must have at least 1 item").min(1).nullable(),
  });


  const { register, handleSubmit, setValue, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = (event, feildName) => {

    setOpen((prevalue) => {
      return {
        ...prevalue,
        [feildName]: event.target.checked
      }
    })
  }


  let submitForm = (data, e) => {
    e.preventDefault(e);
    let formData = new FormData(e.target);
    let uploadFile = formData.get('image');
    var reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onload = function () {
      data.image = reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    setOpen(false)
    console.log(data)
    document.querySelectorAll('.network-checkbox input').forEach((elem) => {
      if (elem.checked) {
        elem.click();
      }
    })
    reset();
  }


  return (

    <Paper sx={{
      margin: 'auto'
    }} >
      <Box component='form' px={3} py={2} maxWidth='750px' width='100%' alignContent='center' onSubmit={handleSubmit(submitForm)}>
        <Typography variant="h6" align="center" margin="dense">
          Token Form
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <TextField
              id="coinName"
              name="coinName"
              label="Coin Name"
              fullWidth
              margin="dense"
              {...register('coinName')}
              error={errors.coinName ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.coinName?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField

              type='number'
              id="confirmation"
              name="confirmation"
              label="Confirmation Number"
              fullWidth
              margin="dense"
              {...register('confirmation')}
              error={errors.confirmation ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.confirmation?.message}
            </Typography>

          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField

              type='number'
              id="decimal"
              name="decimal"
              label="Decimal"
              fullWidth
              margin="dense"
              {...register('decimal')}

              error={errors.decimal ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.decimal?.message}
            </Typography>

          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="image"
              name="image"
              label="Image"
              type="file"
              fullWidth
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => { setValue('image', e.target.files[0], { shouldValidate: true }) }}
              error={errors.image ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.image?.message}
            </Typography>

          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField

              id="fullName"
              name="fullName"
              label="Full Name"
              fullWidth
              margin="dense"
              {...register('fullName')}

              error={errors.fullName ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.fullName?.message}
            </Typography>

          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField

              id="minimumWithdraw"
              name="minimumWithdraw"
              label="Minimum Withdraw"
              fullWidth
              margin="dense"
              {...register('minimumWithdraw')}

              error={errors.minimumWithdraw ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.minimumWithdraw?.message}
            </Typography>

          </Grid>


          <Grid item xs={12} sm={12}>
            <TextField
              id="select"
              select
              fullWidth
              margin="dense"
              label="Token Type"
              helperText="Please select your Token Type"
              {...register('select')}
              error={errors.select ? true : false}
            >
              <Typography variant="inherit" color="textSecondary">
                {errors.select?.message}
              </Typography>
              {tokens.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </Grid>

          <Grid item xs={12} sm={12}>
            <Box
              fullWidth
              margin="dense"
              

            >

              <FormControl   component="fieldset" variant="standard"
                error={errors.chooseCb ? true : false} >
                <FormLabel component="legend">Networks</FormLabel>
                <FormGroup>

                  {network.map((check, index) => {
                    return (
                      <FormControlLabel sx={{ display:'block'}}
                        label={
                          <Box >
                            {open[check.forControl] &&
                              <Box id={check.Network}>
                                <Grid container spacing={1}>
                                <Grid item xs={12} sm={3}>
                                  <TextField
                                    onChange={(event)=>{setValue(`${check.forControl}.decimalNum`,`${event.target.value}`);}}
                                    type='number'
                                    required
                                    id={`decimalsnum${index}`}
                                    name="decimalsnum"
                                    label="Decimal"
                                    fullWidth
                                    margin="dense"              
                                  />          
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                  <TextField
                                  onChange={(event)=>{setValue(`${check.forControl}.fee`,`${event.target.value}`);}}
                                  type='number'
                                  required
                                    id={`fee${index}`}
                                    name="fee"
                                    label="fee"
                                    fullWidth
                                    margin="dense"                     
                                />           
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                  <TextField
                                  onChange={(event)=>{setValue(`${check.forControl}.contract`,`${event.target.value}`);}}
                                  required
                                    id={`contract${index}`}
                                    name="contract"
                                    label="Contract"
                                    fullWidth
                                    margin="dense"                   
                                  />
                                  
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                  <TextField
                                  onChange={(event)=>{setValue(`${check.forControl}.abi`,`${event.target.value}`);}}
                                    id={`abi${index}`}
                                    required
                                    name="abi"
                                    label="ABI"
                                    fullWidth
                                    margin="dense"  
                                  />
                                </Grid>
                                </Grid>
                              </Box>
                            }

                          </Box>
                        }
                        control={
                          <Controller
                            name={check.forControl}
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { value, ...field } }) => {
                              return (
                                <Box sx={{
                                  display:'block'
                                }}>
                                  <MuiCheckbox
                                    {...field}
                                    checked={!!value}
                                    onChange={(event) => { field.onChange(event); handleChange(event, check.forControl) }}
                                  />
                                  {check.Network}
                                </Box>

                              )
                            }}

                          />
                        }

                      />


                    )
                  })}

                </FormGroup>
              </FormControl>
              <Typography variant="inherit" color="textSecondary">
                {errors.chooseCb?.message}
              </Typography>

            </Box>


          </Grid>



        </Grid>

        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </Box>

      </Box>
    </Paper>

  );
};
export default TokenForm;