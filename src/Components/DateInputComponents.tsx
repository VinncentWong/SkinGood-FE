// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';

export const DateInputComponent = ({label, onChange, inputState} : {
    label: string
    onChange: any
    inputState: Date
}): JSX.Element => {
    return(
        <div>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
                <DatePicker
                    disableFuture
                    label={label}
                    onChange={onChange}
                    renderInput={(params) => {
                        return <TextField {...params}></TextField>;
                    } } 
                    value={inputState}                >
                </DatePicker>
            {/* </LocalizationProvider> */}
        </div>
    )
}