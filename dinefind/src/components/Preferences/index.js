import React from "react";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Rating from '@material-ui/lab/Rating';
import {FormGroup} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const marks = [
    {
        value: 0,
        label: '0 Miles'
    },
    {
        value: 5,
        label: '5 Miles'
    },
    {
        value: 5,
        label: '5 Miles'
    },
    {
        value: 10,
        label: '10 Miles'
    },
    {
        value: 15,
        label: '15 Miles'
    },
    {
        value: 25,
        label: '25 Miles'
    },
    {
        value: 50,
        label: '50 Miles'
    },
    {
        value: 100,
        label: '100 Miles'
    },
]
function valuetext(value) {
    return `${value}Mi`;
}

function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
}
export default function Preferences() {
        const [value, setValue] = React.useState(2);

        const [state, setState] = React.useState({
            open: true,
            chains: true,
            visited: true,
            distance: 0,
            rating: 0
    });
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };
    return(
        <FormGroup>
            <Typography id="discrete-slider-always" gutterBottom>
                How far?
            </Typography>
            <Slider
                name="distance"
                className="slider"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={5}
                marks={marks} />
            <FormControlLabel control={
                <Switch className="switch" checked={state.chains} onChange={handleChange('chains')} value="chains" />
            } label="Do you like chain restaurants?"
                />
            <FormControlLabel control={
            <Switch className="switch" checked={state.visited} onChange={handleChange('visited')} value="visited" />
            } label="Do you like to revisit them?"
                 />
            <FormControlLabel control={
                <Switch className="switch" checked={state.open} onChange={handleChange('open')} value="open" />
            } label="Should it be open now?"
            />
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">How should it be rated?</Typography>
                <Rating
                    name="rating"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    />
            </Box>
            <button
                type = "submit"
                onClick={event => {

                }
                }
            >
                </button>
        </FormGroup>

    )
}
