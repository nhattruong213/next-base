import { forwardRef } from 'react';
// @mui
import Link from '@mui/material/Link';
import { BoxProps } from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';
import SvgColor from '../svg-color';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <SvgColor
        src="/assets/icons/logo/ff.svg"
        sx={{
          width: 40,
          height: 40,
          cursor: 'pointer',
          color: (theme) => theme.palette.primary.dark,
          ...sx,
        }}
      />
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
