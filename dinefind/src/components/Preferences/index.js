import React from "react";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {FormGroup} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import firebase from "firebase";

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
    const [state, setState] = React.useState({
        chains: true,
        visited: true
    });
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const mySlider = withStyles({
        root: {
            height: 5,
        }
    });
    return(
        <div className="centered-container row">
            <div className="col-6 col-s-8">
                <FormGroup>
                    <h1>Are you hungry...</h1>
                    <h3 class="white">to try something new? </h3>
                    <p>Find a restaurant that you haven't tried yet! Our default settings help you find close, local, and new restaurants. Before we begin, check your search preferences to see if you want to make any changes. You can always come back to make changes at any time.</p>
                    <Typography id="discrete-slider-always" gutterBottom>
                        <p>Distance in miles:</p>
                    </Typography>
                    <Slider
                        aria-label="mySlider"
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
                    <button
                        type = "submit"
                    >
                        </button>
                </FormGroup>
            </div>
        </div>
    )
}
