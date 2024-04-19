import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import { makeStyles } from "@material-ui/core/styles";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import data from 'data.json';
import customer from 'customer.json';
import { getDayOfWeek, getTimeFormat, formatPhoneNumber } from 'helpers/functions'
import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";


const useStyles = makeStyles(contactsStyle);

const RegularMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: Number(customer.lat), lng: Number(customer.lng) - 0.005 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: Number(customer.lat), lng: Number(customer.lng) }} ></Marker>
    </GoogleMap>
  ))
);

export default function SectionContacts() {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const classes = useStyles();
  return (
    <div id="contact" className="cd-section">
      <style>
        {`
          .MuiSvgIcon-root {
            color: ${data.color.theme}
          }
          .makeStyles-title-299 {
            color: ${data.color.secondary}
          }
        `}
      </style>
      <div className={classes.contacts2}>
        <div className={classes.map}>
          <RegularMap
            lat={customer.lat}
            lng={customer.lng}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkPRQOfmaNmy59lw6L2cytE4rkJf5pjmU&libraries=places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <GridItem xs={12} sm={6} md={4}>
          <Card className={classes.card2}>
            <CardHeader contact className={classes.textCenter} style={{ backgroundColor: data.color.headingword }}>
              <h4 className={classes.cardTitle}>Contact Us</h4>
            </CardHeader>
            <CardBody >
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} >
                  <InfoArea
                    className={classes.infoArea2}
                    title="Phone"
                    description={
                      <span style={{ color: data.color.contactword }}>
                        {customer.contactNumber}
                      </span>
                    }
                    icon={Phone}
                    iconColor="primary"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <InfoArea
                    className={classes.infoArea2}
                    title="Address"
                    description={
                      <span style={{ color: data.color.contactword }}>
                        {customer.address}
                      </span>
                    }
                    icon={PinDrop}
                    iconColor="primary"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                <InfoArea
                    className={classes.infoArea2}
                    title="Business Hours"
                    description={
                      <table>
                        <tbody>
                          {JSON.parse(customer.hours).map((i, index) =>
                            <tr style={{ color: data.color.contactword }}>
                              <td >{getDayOfWeek(index)}</td>
                              <td>{(i[0] === '' || i[0] == 0) ? 'Closed' : `${getTimeFormat(i[0])}-${getTimeFormat(i[1])}`}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    }
                    icon={BusinessCenter}
                    iconColor="primary"
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </div>
    </div>
  );
}
