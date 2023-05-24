import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import Paper from '@mui/material/Paper';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';


export default function Footer() {
	const [value, setValue] = React.useState(0);
	const ref = React.useRef(null);

	return (

		<Box sx={{ pb: 7 }} ref={ref}>
			<CssBaseline />
			
			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction href="https://www.instagram.com/code3graphix/" target="_blank" label="Instagram" icon={<InstagramIcon />} />
					<BottomNavigationAction href="https://www.facebook.com/Code3Graphix" target="_blank" label="Facebook" icon={<FacebookIcon />} />
					<BottomNavigationAction onClick={() => window.location = "mailto:info@code3graphix.com"} label="Email" icon={<EmailIcon />} />
					<BottomNavigationAction href="tel:5208226423" label="Phone" icon={<PhoneIcon />} />
				</BottomNavigation>
			</Paper>
		</Box>

	);
}

// info@code3graphix.com