

    import React, { Component } from 'react';
    import {
        TextField,
        Button,
        Box,
        MenuItem,
        createTheme,
        ThemeProvider,
        ListItemIcon,
        ListItemText,
        Avatar,
        FormControlLabel,
        Checkbox,
        Typography,
    } from '@mui/material';
    // import CheckIcon from '@mui/icons-material/Check';
    import CheckCircleIcon from '@mui/icons-material/CheckCircle';

    import CloseIcon from '@mui/icons-material/Close';

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
        { label: 'India', name: 'India', flag: 'https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_1280.png', code: '+91' },
        { label: 'Bahrain', name: 'Bahrain', flag: 'https://minio.b308736.dev.eastus.az.svc.builder.cafe/sbucket/fc1hspd0765cwx3ifkfmeuqjbjrb', code: '+902' },
        { label: 'Oman', name: 'Oman', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/1024px-Flag_of_Oman.svg.png', code: '+968' },
        { label: 'Egypt', name: 'Egypt', flag: 'https://minio.b308736.dev.eastus.az.svc.builder.cafe/sbucket/klu987dscu5fnbvoj1omc03jmt6q', code: '+968' },
        { label: 'KSA', name: 'KSA', flag: 'https://minio.b308736.dev.eastus.az.svc.builder.cafe/sbucket/azw9kja8jmtb631ufkz07wwgl31k', code: '+712' },
        { label: 'Quatar', name: 'Qatar', flag: 'https://minio.b308736.dev.eastus.az.svc.builder.cafe/sbucket/mterwiife94nrof0fna1os614x9u', code: '+603' },
        { label: 'Kuwait', name: 'Kuwait', flag: 'https://minio.b308736.dev.eastus.az.svc.builder.cafe/sbucket/un6e6o5ruzxgjafidl749xyz8y38', code: '+413' },
        { label: 'New Zealand', name: 'New Zealand', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/640px-Flag_of_New_Zealand.svg.png', code: '+64' },
        { label: 'UAE', name: 'UAE', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/640px-Flag_of_the_United_Arab_Emirates.svg.png', code: '+971' },
    ];

    type State = {
        fullName: string;
        email: string;
        selectedCountry: string;
        phoneCode: string;
        fullNameError: string;
        emailError: string;
        countryError: string;
        phoneError: string;
        password: string;
        passwordError: string;
        termsChecked: boolean;
        termsError: string;
    };

    class Form extends Component<{}, State> {
        state: State = {
            fullName: '',
            email: '',
            selectedCountry: '',
            phoneCode: '',
            phoneError: '',
            fullNameError: '',
            emailError: '',
            countryError: '',
            password: '',
            passwordError: '',
            termsChecked: false,
            termsError: '',
        };

        handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ fullName: event.target.value, fullNameError: '' });
        };

        handleFullNameBlur = () => {
            if (this.state.fullName.trim() === '') {
                this.setState({ fullNameError: 'Name is required' });
            }
        };

        handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ email: event.target.value, emailError: '' });
        };

        handleEmailBlur = () => {
            if (this.state.email.trim() === '') {
                this.setState({ emailError: 'Email Address is required' });
            }
        };

        handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ phoneCode: event.target.value, phoneError: '' });
        };

        handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ password: event.target.value, passwordError: '' });
        };

        handlePasswordBlur = () => {
            if (this.state.password.trim() === '') {
                this.setState({ passwordError: 'Password is required' });
            }
        };

        handleCountryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
            const selectedCountry = event.target.value as string;
            const phoneCode = countries.find(country => country.name === selectedCountry)?.code || '';
            this.setState({ selectedCountry, phoneCode, countryError: '' });
        };

        handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ termsChecked: event.target.checked, termsError: '' });
        };

        handleSubmit = () => {
            const { fullName, email, selectedCountry, termsChecked, password, phoneCode } = this.state;
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

            if (password.trim() === '') {
                this.setState({ passwordError: 'Password is required' });
                valid = false;
            }

            if (!termsChecked) {
                this.setState({ termsError: 'You must agree to the terms and conditions' });
                valid = false;
            }

            if (valid) {
                console.log(`Full Name: ${fullName}\nEmail: ${email}\nCountry: ${selectedCountry}\nPhone Code: ${phoneCode}\nPassword: ${password}`);
            }
        };

        render() {
            const { fullName, email, selectedCountry, phoneCode, fullNameError, emailError, countryError, phoneError, termsChecked, termsError, password, passwordError } = this.state;

            const isLengthValid = password.length >= 8;
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumber = /[0-9]/.test(password);

            const isFormValid = isLengthValid && hasUpperCase && hasLowerCase && hasNumber && termsChecked;

            return (
                <>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Avatar
                            sx={{ height: '40%', width: '40%', marginTop: '8rem' }}
                            src='https://warrantyapp-308736-react.b308736.dev.eastus.az.svc.builder.cafe/static/media/signup_left_image.016c1705.png'
                        />
                        <Box sx={{ boxShadow: "5px" }}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { sm: '1fr' },
                                    gap: 2,
                                    maxWidth: "650px",
                                    height: '100vh',
                                    margin: "0 auto",
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: 'white',
                                        boxShadow: '0px 1px 10px #EBEBEB',
                                        marginTop: '3rem',
                                        
                                        borderRadius: '20px',
                                    }}
                                >
                                    <Box sx={{ fontSize: "30px", fontWeight: "bold" }}>Need an Account - Sign Up</Box>
                                    <Box sx={{ color: "#01BEFE", fontSize: "25px" }}>Basic Information</Box>
                                    <ThemeProvider theme={customTheme}>
                                        <TextField
                                            sx={{ width: '93%', marginLeft: '20px', fontSize: '18px', fontWeight: '400', color: '#051720', borderRadius: '20px' }}
                                            label="Full Name"
                                            variant="outlined"
                                            value={fullName}
                                            onChange={this.handleFullNameChange}
                                            onBlur={this.handleFullNameBlur}
                                            error={!!fullNameError}
                                            helperText={fullNameError}
                                        />
                                        <TextField
                                            sx={{
                                                width: '93%', marginLeft: '20px', fontSize: '18px', marginTop: '15px',
                                                fontWeight: '400', color: '#051720', borderRadius: '20px'
                                            }}
                                            label="Email Address"
                                            variant="outlined"
                                            value={email}
                                            onChange={this.handleEmailChange}
                                            onBlur={this.handleEmailBlur}
                                            error={!!emailError}
                                            helperText={emailError}
                                        />
                                        <TextField
                                            sx={{
                                                width: '93%', marginLeft: '20px', fontSize: '18px', marginTop: '15px',
                                                fontWeight: '400', color: '#051720', borderRadius: '20px'
                                            }}
                                            select
                                            label="Country"
                                            variant="outlined"
                                            value={selectedCountry}
                                            onChange={this.handleCountryChange}
                                            error={!!countryError}
                                            helperText={countryError}
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
                                            sx={{
                                                width: '93%', marginLeft: '20px', fontSize: '18px', marginTop: '15px',
                                                fontWeight: '400', color: '#051720', borderRadius: '20px'
                                            }}
                                            label="Phone Code"
                                            variant="outlined"
                                            value={phoneCode}
                                            error={!!phoneError}
                                            helperText={phoneError}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                        <TextField
                                            sx={{
                                                width: '93%', marginLeft: '20px', fontSize: '18px', marginTop: '15px',
                                                fontWeight: '400', color: '#051720', borderRadius: '20px'
                                            }}
                                            label="Password"
                                            type="password"
                                            variant="outlined"
                                            value={password}
                                            onChange={this.handlePasswordChange}
                                            onBlur={this.handlePasswordBlur}
                                            error={!!passwordError}
                                            helperText={passwordError}
                                        />
                                        <Box sx={{ marginLeft: '20px', marginTop: '10px' }}>
                                            <Typography variant="body2" >
                                                {isLengthValid ? <CheckCircleIcon color="success" /> : <CloseIcon color="error" />}  8 character minimum
                                            </Typography>
                                            <Typography  variant="body2">
                                                {hasUpperCase ? <CheckCircleIcon color="success" /> : <CloseIcon color="error" />} one uppercase character
                                            </Typography>
                                            <Typography  variant="body2">
                                                {hasLowerCase ? <CheckCircleIcon color="success" /> : <CloseIcon color="error" />} one lowercase character
                                            </Typography>
                                            <Typography  variant="body2">
                                                {hasNumber ? <CheckCircleIcon color="success" /> : <CloseIcon color="error" />} one number
                                            </Typography>
                                        </Box>
                                        <FormControlLabel
                                        sx={{marginLeft:'10px'}}
                                            control={
                                                <Checkbox
                                                    checked={termsChecked}
                                                    onChange={this.handleTermsChange}
                                                    name="terms"
                                                    color="primary"
                                                />
                                            }
                                            label="I agree to the Terms & Conditions"
                                        />
                                        {termsError && <Box sx={{ color: 'red', marginTop: '10px' }}>{termsError}</Box>}
                                        <Box>
                                        <Button
                                        sx={{ width:'360px',borderRadius:'50px', marginTop: '20px', backgroundColor: ' #004D74', marginLeft:'5rem' }}
                                            variant="contained"
                                            // color="primary"
                                            fullWidth
                                            onClick={this.handleSubmit}
                                            disabled={isFormValid}
                                            
                                        >
                                            Sign Up
                                        </Button>
                                        </Box>
                                        <Typography variant="body2" sx={{ marginTop: '10px' }}>
                                            Already have an account? <a href="/signin">Sign In</a>
                                        </Typography>
                                    </ThemeProvider>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </>
            );
        }
    }

    export default Form;


