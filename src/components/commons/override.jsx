import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import { styled } from '@mui/material';

export const CButton = styled(Button)({
    borderRadius: 16,
    textTransform: 'none',
    fontSize: 14
})

export const CTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: 16,
    },
    textTransform: 'none',
    fontSize: 14
})
export const CInput = styled(Input)({
    '& .MuiOutlinedInput-root': {
        borderRadius: 16,
    },
    textTransform: 'none',
    fontSize: 14
})