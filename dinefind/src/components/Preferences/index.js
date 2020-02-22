import React from "react";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Rating from '@material-ui/lab/Rating';
import {FormGroup} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Restaurant} from "../Restaurant/Restaurant";

const marks = [
    {
        value: 0,
    },
    {
        value: 5,
    },
    {
        value: 5,
    },
    {
        value: 10,
    },
    {
        value: 15,
    },
    {
        value: 25,
    },
    {
        value: 50,
    },
    {
        value: 100,
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
        <div className="centered-container row">
            <div className="col-6 col-s-8">
            <FormGroup>
                <h1>Are you hungry...</h1>
                <h3 className = "white">to try something new ?</h3>
                <p>Find a restaurant that you haven't tried yet! Our default settings help you find close, local, and new restaurants. Before we begin, check your search preferences to see if you want to make any changes. You can always come back to make changes at any time.</p>
                <h4 className="white">My Preferences</h4>
                <Typography id="discrete-slider-always" gutterBottom>
                    Distance in miles:
                </Typography>
                <Slider
                    name="distance"
                    className="slider"
                    defaultValue={10}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={5}
                    marks={marks} />
                <FormControlLabel control={
                    <Switch className="switch" checked={state.chains} onChange={handleChange('chains')} value="chains" />
                } label="Show chain restaurants"
                    />
                <FormControlLabel control={
                <Switch className="switch" checked={state.visited} onChange={handleChange('visited')} value="visited" />
                } label="Show restaurants I have dined at before"
                     />
                <div class="indent"><p>(You will have the option to select and keep track of the restaurants you have been to on the search results page)</p></div>
                <FormControlLabel control={
                    <Switch className="switch" checked={state.open} onChange={handleChange('open')} value="open" />
                } label="Show open & closed restaurants"
                />
                <Box className="fixPadding" component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">How should it be rated?</Typography>
                <Rating
                    name="rating"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    />
                </Box>
                <h4 className="white">My Filters</h4>
                <button className="signInField signInButton"
                    type = "submit"
                    onClick={event => {
                    }}
                >Save My Settings
                    </button>
            </FormGroup>
            </div>
        </div>
    )
}
