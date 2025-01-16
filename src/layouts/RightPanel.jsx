import { CInput } from "../components/commons/override"
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material";
const SearchInput = styled(OutlinedInput)({
    '& .MuiInputBase-root': {
        borderRadius: 16,
    },
    textTransform: 'none',
    fontSize: 14
})
export const RightPanel = () => {
    return (<div className="right-panel-container">
        <SearchInput variant="outlined" fullWidth endAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }/>
    </div>)
}