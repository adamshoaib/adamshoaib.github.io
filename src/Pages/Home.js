import React from "react";
import DataTable from "../Components/DataTable";
import ToolBar from "../Components/ToolBar";
import Form from "../Components/Form";
import Divider from "@mui/material/Divider";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumbers: 10,
      page: 1,
      data: [
        {
          apartment_address: "604 W 8th Ave Mesa AZ 85210",
          apartment_amenity:
            "In Unit Washer & Dryer,Air Conditioning,Dishwasher,High Speed Internet Access,Walk-In Closets,Microwave,Refrigerator,Wi-Fi",
          apartment_neighborhood: "Central Mesa",
          apartment_rent: "$1,734",
          baths: "2 ba",
          beds: "2 - 3 bd",
          built_in: "Built in 1981",
          cat_policy: "Cats Allowed",
          city: "Mesa",
          college_distance:
            "Mesa C.C., Downtown Center: 2.3 mi|Mesa C.C., Southern and Dobson: 2.4 mi",
          community_amenity:
            "Pool,Fitness Center,Grill,Pet Play Area,Package Service,Maintenance on site,Property Manager on Site",
          contact: "+1-623-323-9382",
          description:
            "About Exchange on the 8 Conveniently located in beautiful Mesa, AZ, only minutes from Downtown Mesa, Highway 60, & the loop 101 freeway, Exchange on the 8 offers you the lifestyle… We are sure to have the perfect apartment for you! Exchange on the 8 is an apartment community located in Maricopa County and the 85210 ZIP Code. This area is served by the Mesa Unified attendance zone. Unique Features 24-Hour Emergency Maintenance 9 Foot Ceilings Accept Visa & Mastercard Amazon Hub Package Lockers Breakfast Bar Cardio Equipment Central AC & Heat Complimentary Coffee Bar Covered Carport Parking Eat-In Kitchen Energy Efficiency Package (Smart Lock & Thermos... Fitness Center Free Weights Friendly Onsite Management Full Size Washer & Dryer Gorgeous Kitchens with White Cabinetry Hammock Garden Jacuzzi Spa Kitchens & Bathrooms with Granite Style Counter... Large Breeds Accepted Lawncare/Lush Landscaping Modern, Brushed Nickel Light Fixtures Off-Leash Dog Park Online Rent Payments Online Service Requests Open Concept Kitchens with White Cabinetry Package Acceptance Pest Control Pet Events Pet Friendly Pet Waste Stations Picnic/Grilling Areas Pool/Courtyard Views* Reserved Parking Available Resort-Style Pool Spacious Closets with Built-In Shelving Split Floor Plans for Additional Privacy Stainless Steel Appliances Stainless Steel Microwaves Strength Training Equipment USB Outlets Virtual/Facetime Tours Offered Walk-In Closets WiFi Hotspot in Common Areas Wood-Style Flooring*",
          dog_policy: "Dogs Allowed",
          id: "z98qrny",
          images:
            "https://images1.apartments.com/i2/Q3GsG0bjkdb4kdYq0PD2yMu78Z8tzLu6FsOwJSAdXsQ/111/exchange-on-the-8-mesa-az-primary-photo.jpg?p=1,https://images1.apartments.com/m2/HmKl4PUTKzN5RgcClryK5Z8z0pQsUJ3GUPt6omWnc_E/H330W495/exchange-on-the-8-mesa-az-map-image-of-the-property.jpg?p=1,https://images1.apartments.com/i2/W-11pZxBDIqCR7ORiOxvhlwv5Z6921PEtVNoTl5tBj8/117/exchange-on-the-8-mesa-az-3d.jpg?p=1,https://images1.apartments.com/i2/zKYrm4ahWQXxdodUaSvmCliLgJrbw3Do0QgSQNeU2yk/117/exchange-on-the-8-mesa-az-the-saguaro-contains-2-bedrooms-and-2-ba.jpg?p=1,https://images1.apartments.com/i2/6xCm32AH07Lk3ZmMyi1hHhb_B7zSW58btkaL2Spj_TI/117/exchange-on-the-8-mesa-az-the-catalina-contains-3-bedrooms-and-2-b.jpg?p=1",
          latitude: "33.40093",
          longitude: "-111.84489",
          model_availability: "2 Available units",
          model_size: "838 sq ft",
          name: "Exchange on the 8",
          nearby_poi:
            "Country Club Plaza-Walk: 10 min|Broadway Mesa Center-Walk: 14 min|i.d.e.a. Museum-Drive: 3 min|Arizona Museum of Natural History-Drive: 4 min|ASU Center for Meteorite Studies-Drive: 14 min|Desert Arboretum Park-Drive: 14 min|Phoenix Sky Harbor Airport Air Guard Station-Drive: 21 min",
          neightborhood_description:
            "From the fine arts to arts education and hiking – Central Mesa has everything you could ever want in a neighborhood. This large residential suburb is quite breathtaking with the Usery Mountains in the distance.\n                        Residents are delighted by the direct access to major freeways as well as the city’s light rail system. With the Phoenix Mesa Airport just a few miles south, traveling abroad is made simple. Golf courses, country clubs, and parks abound in Central Mesa. The hands-on art museum for kids, I.D.E.A Museum, is in walking distance of the Arizona Museum of Natural History and Pioneer Park.\n                        Culinary fare is plentiful and includes vegan, Tex-Mex, Italian, and Thai to name a few. Many large corporations as well as local business reside in Central Mesa.\n                \n                \n                    Learn More About Central Mesa",
          postal_code: "85210",
          rating: "4.0",
          rent_max: "1891",
          rent_min: "1733",
          transit_score: "42",
          url: "https://www.apartments.com/exchange-on-the-8-mesa-az/z98qrny/",
          walk_score: "54",
        },
      ],
      baseUrl: "http://127.0.0.1:3000",
    };
  }
  pageNumberChanged = (e, page) => {
    console.log("pageNumberChanged :", page);
    this.setState({ page: page });
  };

  onSubmitClicked = (data) => {
    console.log("Data: ", data);
    axios({
      method: "post",
      url: `${baseUrl}/api/v1/get_apt`,
      data: data.data,
    }).then((response) => {
      this.setState({ data: response.data });
    });
  };

  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", overflow: "auto" }}
      >
        <ToolBar />
        <div style={{ marginTop: 80, marginBottom: 20 }}>
          <Form onSubmitClicked={(data) => this.onSubmitClicked(data)} />
        </div>
        <Divider />
        <div style={{ marginTop: 20 }}>
          <DataTable data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Home;
