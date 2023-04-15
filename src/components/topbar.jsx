import { Box, IconButton} from '@mui/material';
import { useMode, tokens } from '../themes';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const Topbar = () => {
    const [theme, colorMode] = useMode();
    const colors = tokens(theme.palette.mode);

    return (
    <Box display="flex" justifyContent="space-between" p={1} borderBottom={1} color={colors.grey[600]}>
        <Box display="flex" color={colors.primary[100]}><h1>Bem-Vindo!</h1></Box>
        <Box display="flex" alignItems="center">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? <NightlightOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>
        </Box>
    </Box>
    );
}

export default Topbar; 