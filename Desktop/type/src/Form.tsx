import React, { Component} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const customTheme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '--TextField-brandBorderColor': '#E0E3E7',
                    '--TextField-brandBorderHoverColor': '#B2BAC2',
                    '--TextField-brandBorderFocusedColor': '#6F7E8C',
                    '& label.Mui-focused': {
                        color: 'var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
    },
});

const countries = [
    { label: 'Bahrain', name: 'Bahrain', flag: 'https://minio.b308736.dev.eastus.az.svc.builder.cafe/sbucket/fc1hspd0765cwx3ifkfmeuqjbjrb' },
    { label: 'Oman', name: 'Oman', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/1024px-Flag_of_Oman.svg.png', code: '+968' },
    { label: 'Egypt', name: 'Egypt', flag: 'https://minio.b308736.dev.eastus.az.svc.builder.cafe/sbucket/klu987dscu5fnbvoj1omc03jmt6q', code: '+968' },
    { label: 'KSA', name: 'KSA', flag: 'https://minio.b308736.dev.eastus.az.svc.builder.cafe/sbucket/azw9kja8jmtb631ufkz07wwgl31k' },
    { label: 'Quatar', name: 'Qatar', flag: 'https://minio.b308736.dev.eastus.az.svc.builder.cafe/sbucket/mterwiife94nrof0fna1os614x9u' },
    { label: 'Kuwait', name: 'Kuwait', flag: 'https://minio.b308736.dev.eastus.az.svc.builder.cafe/sbucket/un6e6o5ruzxgjafidl749xyz8y38' },
    { label: 'New Zealand', name: 'New Zealand', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/640px-Flag_of_New_Zealand.svg.png', code: '+64' },
    { label: 'UAE', name: 'UAE', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/640px-Flag_of_the_United_Arab_Emirates.svg.png', code: '+971' }

];

type State = {
    fullName: string;
    email: string;
    selectedCountry: string;
    phoneCode: string;
    fullNameError: string;
    emailError: string;
    countryError: string;
    termsChecked: boolean;
    termsError: string;
};

class Form extends Component<{}, State> {
    state: State = {
        fullName: '',
        email: '',
        selectedCountry: '',
        phoneCode: '',
        fullNameError: '',
        emailError: '',
        countryError: '',
        termsChecked: false,
        termsError: ''
    };

    handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            fullName: event.target.value,
            fullNameError: ''
        });
    };

    handleFullNameBlur = () => {
        if (this.state.fullName.trim() === '') {
            this.setState({ fullNameError: 'Name is required' });
        }
    };

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: event.target.value,
            emailError: ''
        });
    };

    handleEmailBlur = () => {
        if (this.state.email.trim() === '') {
            this.setState({ emailError: 'Email Address is required' });
        }
    };

    handleCountryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const selectedCountry = event.target.value as string;
        const phoneCode = countries.find(country => country.name === selectedCountry)?.code || '';
        this.setState({
            selectedCountry,
            phoneCode,
            countryError: ''
        });
    };

    handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            termsChecked: event.target.checked,
            termsError: ''
        });
    };

    handleSubmit = () => {
        const { fullName, email, selectedCountry, termsChecked } = this.state;
        let valid = true;
        if (fullName.trim() === '') {
            this.setState({ fullNameError: 'Name is required' });
            valid = false;
        }
        if (email.trim() === '') {
            this.setState({ emailError: 'Email Address is required' });
            valid = false;
        }
        if (selectedCountry.trim() === '') {
            this.setState({ countryError: 'Country is required' });
            valid = false;
        }
        if (!termsChecked) {
            this.setState({ termsError: 'You must agree to the terms and conditions' });
            valid = false;
        }
        if (valid) {
            console.log(`Full Name: ${fullName}\nEmail: ${email}\nCountry: ${selectedCountry}`);
        }

    };

    render() {
        const { fullName, email, selectedCountry, phoneCode, fullNameError, emailError, countryError, termsChecked, termsError } = this.state;
        return (
            <>
                <Box sx={{ boxShadow: "5px" }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { sm: '1fr' },
                            gap: 2,
                            width: "30%",
                            margin: "0 auto"
                        }}
                    >
                        <Box sx={{ fontSize: "30px", fontWeight: "bold" }}>Need an Account - Sign Up</Box>
                        <Box sx={{ color: "#01BEFE", fontSize: "25px" }}>Basic Information</Box>
                        <ThemeProvider theme={customTheme}>
                            <TextField
                                label="Full Name"
                                variant="outlined"

                                value={fullName}
                                onChange={this.handleFullNameChange}
                                onBlur={this.handleFullNameBlur}
                                error={!!fullNameError}
                                helperText={fullNameError}
                                required
                            />
                            <TextField
                                label="Email Address"
                                variant="outlined"
                                value={email}
                                onChange={this.handleEmailChange}
                                onBlur={this.handleEmailBlur}
                                error={!!emailError}
                                helperText={emailError}
                                required
                            />
                            <TextField
                                select
                                label="Country"
                                variant="outlined"
                                value={selectedCountry}
                                onChange={this.handleCountryChange}
                                error={!!countryError}
                                helperText={countryError}
                                required
                            >
                                {countries.map((country) => (
                                    <MenuItem key={country.code} value={country.name}>
                                        <ListItemIcon>
                                            <Avatar src={country.flag} alt={country.name} />
                                        </ListItemIcon>
                                        <ListItemText primary={country.name} />
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField
                                label="Phone Code"
                                variant="outlined"
                                value={phoneCode}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="terms"
                                        color="primary"
                                        checked={termsChecked}
                                        onChange={this.handleTermsChange}
                                    />
                                }
                                label="I agree to the Terms and Conditions"
                                sx={{ marginTop: '10px' }}
                            />
                            {termsError && <Box sx={{ color: 'red', marginTop: '10px' }}>{termsError}</Box>}

                            <Button sx={{ color: "#FFF", backgroundColor: "#004D74", fontSize: "20px", width: '360px', height: '64px', borderRadius: '50px' }} variant="contained" onClick={this.handleSubmit}>
                                SignUp
                            </Button>
                        </ThemeProvider>
                    </Box>
                </Box>
            </>
        );
    }
}

export default Form;