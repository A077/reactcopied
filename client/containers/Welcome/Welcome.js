import React, { Component, PropTypes } from 'react';
import GoogleMap from '../GoogleMap';
import Table from '../Table';

export class WelcomeContainer extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			name: '',
            lat: '40.178494',
            lng: '44.5006323',
            rows: ''
		}
	}

	//fires when component mounts
	componentDidMount() {
	    this.userLoc()
    }


    //gets user location
	userLoc() {

	    let pos = {
            lat: this.state.lat,
            lng: this.state.lng
        }

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(position => {
                pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                if(pos.lat !== this.state.lat || pos.lng !== this.state.lng) {
                    this.setState({
                        lat: pos.lat,
                        lng: pos.lng
                    },()=>{
                        setTimeout(()=>{
                            let position = new google.maps.LatLng(this.state.lat,this.state.lng);
                            let marker = new google.maps.Marker({
                                position: position,
                                map: window.map
                            });
                            marker.setMap(window.map);
                        },1000)
                    });
                }
            }, () => {
                handleLocationError(true, infoWindow, map.getCenter());
            });

        } else {
            var infoWindow = new google.maps.InfoWindow({
                map: map
            });

            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }


        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation
                ? 'Error: The Geolocation service failed.'
                :  'Error: Your browser doesn\'t support geolocation.');
        }
    }

    //user wants to check-in
	checkIn() {
        let name = prompt('Please Enter Your Name Below');
        this.setState({name},this.postData.bind(this));

    }

    //post user submitted data
    postData() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let reqConf = { method: 'POST',
            headers: headers,
            mode: 'cors',
            cache: 'default' };

        let body = JSON.stringify({
            name: this.state.name,
            lat: this.state.lat,
            lng: this.state.lng
        });

        let req = new Request('https://example.com/api/POST', reqConf, body);
    }

    //filling the table
    getRows() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let reqConf = { method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default' };

        let body = JSON.stringify({
            lat: this.state.lat,
            lng: this.state.lng
        });

        let req = new Request('https://example.com/api/GET', reqConf, body);
        fetch(req)
            .then((response)=>{
                return response.json();
            })
            .then((res) => {
                draw(res);
            })
            .catch((err)=>console.log(err));
    }

	render() {
        const style = {
            height: '300px',
            marginBottom: '20px'
        }
		return (
			<div className={"center-block"} onLoad={this.userLoc.bind(this)}>
                <div className={"text-center"}>
				  <h1>Check-in Yourself</h1>
				  <div style={style}>
			  		  <GoogleMap/>
				  </div>
                  <button type="button" className="btn btn-info" onClick={this.checkIn.bind(this)}>Check in now !</button>
                </div>
                <Table getRows={this.getRows.bind(this)} rows={this.state.rows}/>
                <input type="hidden" name="name" value={this.state.name}/>
                <input type="hidden" name="lat" value={this.state.lat}/>
                <input type="hidden" name="lng" value={this.state.lng}/>
			</div>
		);
	}
}
