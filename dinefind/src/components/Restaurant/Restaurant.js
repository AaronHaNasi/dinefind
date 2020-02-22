import React,{Component} from "react";
import PropTypes from 'prop-types'
import Button from "@material-ui/core/Button";
import Rating from '@material-ui/lab/Rating';

export class Restaurant extends Component{

    render() {
        return(
            <div class="callout">
                <h1>{this.props.name}</h1>
                <p>{this.props.distance} miles</p>
                <Button variant="contained"
                onClick={event => {
                    window.open("https://maps.google.com?q="+this.props.latitude+","+this.props.longitude)
                }
                }
                >Open in maps</Button>
                <Rating
                    value={this.props.rating}
                    readOnly
                />
            </div>
        )


}
}
Restaurant.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    distance: PropTypes.number,
    longitude: PropTypes.number,
    latitude: PropTypes.number
        };
