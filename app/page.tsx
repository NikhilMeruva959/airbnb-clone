"use client";

import React, { useEffect, useState, useRef } from "react";
import { faker } from "@faker-js/faker";
import axios from "axios";

import Image from "next/image";

import Container from "./components/Container";

export default function Home() {
  const useEffectOnlyOnUpdate = (callback: any, dependencies: any) => {
    const didMount = useRef(false);

    useEffect(() => {
      if (didMount.current) {
        callback(dependencies);
      } else {
        didMount.current = true;
      }
    }, [callback, dependencies]);
  };

  interface Place {
    name: string;
    rating: number;
  }

  // Define the interface for the address object
  interface Address {
    state: string;
    country: string;
    address_string: string;
    street1?: string;
    street2?: string;
    city?: string;
    postalcode?: string;
  }

  // Define the interface for each object inside the data array
  interface LocationData {
    location_id: string;
    name: string;
    address_obj: Address;
  }

  // The main interface representing the entire data object
  interface DataObject {
    dataa: LocationData[];
  }

  // Sample data based on the provided object
  const dataa: DataObject = {
    dataa: [
      {
        location_id: "46325",
        name: "Bridgewater",
        address_obj: {
          state: "New Jersey",
          country: "United States",
          address_string: "Bridgewater, NJ",
        },
      },
      // ... other objects ...
    ],
  };

  const [data, setData] = useState<DataObject[]>([]);
  const [preciseData, setPreciseData] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  var randomPhoneNumber = faker.vehicle.vehicle();
  console.log(randomPhoneNumber);

  const tempArr = {
    hotels: [
      {
        name: "Hotel A",
        shortDes: "Litchfield, Connecticut",
        address: "123 Main Street, Bridgewater, NJ",
        phone: "(123) 456-7890",
        distance: "8 miles away",
        date: "Aug 13-19",
        rent: "$412 night",
        website: "http://www.hotela.com",
        rating: "4.98",
        imageSrc:
          "https://www.hilton.com/im/en/RBACICI/17998235/rbaci-1521.jpg?impolicy=crop&cw=2640&ch=3000&gravity=NorthWest&xposition=929&yposition=0&rw=1502&rh=1706",
      },
      {
        name: "Hotel B",
        shortDes: "San Diego, California",
        address: "456 Elm Street, Bridgewater, NJ",
        phone: "(987) 654-3210",
        distance: "5 miles away",
        date: "Aug 1-4",
        rent: "$210 night",
        website: "http://www.hotelb.com",
        rating: "4.28",
        imageSrc:
          "https://www.marriott.com/content/dam/marriott-renditions/dm-static-renditions/tx/emea/hws/s/seztx/en_us/photo/unlimited/assets/tx-seztx-pool-21834-wide-hor.jpg",
      },
      {
        name: "Hotel C",
        shortDes: "Aspen, Colorado",
        address: "789 Oak Street, Bridgewater, NJ",
        phone: "(555) 123-4567",
        distance: "1 mile away",
        date: "Jul 23-28",
        rent: "$178 night",
        website: "http://www.hotelc.com",
        rating: "3.10",
        imageSrc:
          "https://img.etimg.com/thumb/msid-96836017,width-1200,height-900,imgsize-120772,resizemode-8,quality-100/prime/corporate-governance/from-marriotts-to-hyatts-to-le-mridiens-premium-hotel-assets-are-stuck-at-bankruptcy-courts.jpg",
      },
      {
        name: "Hotel D",
        shortDes: "Roslyn, New York",
        address: "987 Pine Street, Bridgewater, NJ",
        phone: "(111) 222-3333",
        distance: "10 miles away",
        date: "Sep 5-12",
        rent: "$320 night",
        website: "http://www.hoteld.com",
        rating: "4.76",
        imageSrc:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1",
      },
      {
        name: "Hotel E",
        shortDes: "Savannah, Georgia",
        address: "789 Maple Avenue, Bridgewater, NJ",
        phone: "(444) 555-6666",
        distance: "3 miles away",
        date: "Oct 8-12",
        rent: "$275 night",
        website: "http://www.hotele.com",
        rating: "4.92",
        imageSrc:
          "https://theenglishhotel.com/wp-content/uploads/2022/06/image002-2.png",
      },
      {
        name: "Hotel F",
        shortDes: "Litchfield, Connecticut",
        address: "321 Walnut Street, Bridgewater, NJ",
        phone: "(777) 888-9999",
        distance: "2 miles away",
        date: "Nov 15-20",
        rent: "$190 night",
        website: "http://www.hotelf.com",
        rating: "4.50",
        imageSrc:
          "https://d1hkug86aarhhk.cloudfront.net/therallyhotel.com-1770556520/cms/cache/v2/62d982ffc52bd.jpg/1920x1080/fit/80/3f989b0a104873f0681a6f8ab4486579.jpg",
      },
      {
        name: "Hotel F",
        shortDes: "Boulder, Colorado",
        address: "321 Walnut Street, Bridgewater, NJ",
        phone: "(777) 888-9999",
        distance: "2 miles away",
        date: "Nov 15-20",
        rent: "$190 night",
        website: "http://www.hotelf.com",
        rating: "4.50",
        imageSrc:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/2f/4f/dc/wave-resort.jpg?w=1200&h=-1&s=1",
      },
      {
        name: "Hotel F",
        shortDes: "Charleston, South Carolina",
        address: "321 Walnut Street, Bridgewater, NJ",
        phone: "(777) 888-9999",
        distance: "2 miles away",
        date: "Nov 15-20",
        rent: "$190 night",
        website: "http://www.hotelf.com",
        rating: "4.50",
        imageSrc:
          "https://www.cvent.com/sites/default/files/image/2018-07/luxury-hotel.jpg",
      },
      {
        name: "Hotel F",
        shortDes: "Carmel, California",
        address: "321 Walnut Street, Bridgewater, NJ",
        phone: "(777) 888-9999",
        distance: "2 miles away",
        date: "Nov 15-20",
        rent: "$190 night",
        website: "http://www.hotelf.com",
        rating: "4.50",
        imageSrc:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ec/4f/1f/ocean-place-resort-spa.jpg?w=1200&h=-1&s=1",
      },
      {
        name: "Hotel F",
        shortDes: "Portland, Oregon",
        address: "321 Walnut Street, Bridgewater, NJ",
        phone: "(777) 888-9999",
        distance: "2 miles away",
        date: "Nov 15-20",
        rent: "$190 night",
        website: "http://www.hotelf.com",
        rating: "4.50",
        imageSrc:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/62/c6/63/asbury-ocean-club-hotel.jpg?w=1200&h=-1&s=1",
      },
    ],
  };

  // //useEffect
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        mode: "no-cors",
        url: "http://localhost/api/location/search",
        params: {
          language: "en",
          key: "AIzaSyCr5Gyb_aIePJCD_4CAuDPZOLKsA0RkCig",
          searchQuery: "Bridgewater",
        },
        headers: { accept: "application/json" },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once (on mount)

  // //useEffect
  useEffect(() => {
    console.log(data);

    console.log("i fire once");

    // fetchDataPhotos(idVar);
  }, [data]); // Empty dependency array to run only once (on mount)

  useEffectOnlyOnUpdate(
    (dependencies: any) => {
      const fetchDataPhotos = async (locId: any) => {
        const options = {
          method: "GET",
          mode: "no-cors",
          url: "http://localhost/api/location/photos",
          params: {
            language: "en",
            key: "2F8D049813734A53859A27A640E1F875",
            locationId: locId,
          },
          headers: { accept: "application/json" },
        };
        try {
          const response = await axios.request(options);
          console.log(response.data);
          // setPhotoData((prevData: any) => prevData + response.data);
          setPhotoData(response.data);

          // setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      const dataArray = data;

      // for (const item of dataArray["data"]) {
      //   fetchDataPhotos(item.location_id);
      // }
    },
    [data]
  );

  //---------------------------------------------------------------------------------------------------------------------------------------------------

  // useEffect(() => {
  //   const fetchSepcificData = async (param: number) => {
  //     const options = {
  //       method: "GET",
  //       url: "http://localhost/api/location/locationId",
  //       params: {
  //         key: "2F8D049813734A53859A27A640E1F875",
  //         language: "en",
  //         currency: "USD",
  //         locationId: param,
  //       },
  //       headers: { accept: "application/json" },
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //       setPreciseData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   // let locationId = 46325;
  //   // fetchSepcificData(locationId);

  //   // for (let i = 0; i < data.length; i++) {
  //   //   fetchSepcificData(data[i][0]);
  //   // }
  //   fetchSepcificData();
  // }, [data]);

  if (isLoading) {
    return <div>Loading5...</div>;
  }

  console.log("KKK1");
  console.log(data);
  // useEffect(() => {
  //   setData(tempArr.hotels);
  // }, []);
  console.log(data);
  console.log("KKK2");
  console.log(Object.keys(data));
  console.log(JSON.stringify(data));
  console.log(photoData);
  // const firstElement = data && data.length > 0 ? data[0] : null;
  // console.log(firstElement);

  function sortByRating(): void {
    const tempData = data?.results.sort((a, b) => b.rating - a.rating);
    console.log(tempData);
    setData(tempData);
  }

  return (
    //   <>
    //     {/* <Container>
    //       <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
    //         {tempArr.hotels.map((listing: any) => {
    //           return (
    //             <div
    //               onClick={() => "/"}
    //               className="col-span-1 cursor-pointer group"
    //             >
    //               <div className="flex flex-col gap-2 w-full">
    //                 <div className="aspect-square w-full relative overflow-hidden rounded-xl">
    //                   <Image
    //                     fill
    //                     alt="Listing"
    //                     src={listing.imageSrc}
    //                     className="object-cover h-ful w-full group-hover:scale-110 transition"
    //                   />
    //                 </div>
    //                 <div className="font-semibold text-lg">
    //                   {listing?.shortDes}
    //                 </div>
    //                 <div className="font-light text-neutral-500">
    //                   {listing?.distance}
    //                 </div>
    //                 <div className="font-light text-neutral-500">
    //                   {listing?.date}
    //                 </div>
    //                 <div className="flex flex-row items-center gap-1">
    //                   <div className="font-semibold">{listing?.rent}</div>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </Container> */}

    <Container>
      <>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          <button onClick={sortByRating}>Sort by Rating</button>
          {data["results"]?.map((listing: any) => {
            return (
              <div
                onClick={() => "/"}
                className="col-span-1 cursor-pointer group"
              >
                <div className="flex flex-col gap-2 w-full">
                  <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <Image
                      fill
                      alt="Listing"
                      src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${listing.photos[0].photo_reference}&sensor=false&maxheight=400&maxwidth=400&key=AIzaSyCr5Gyb_aIePJCD_4CAuDPZOLKsA0RkCig`}
                      className="object-cover h-ful w-full group-hover:scale-110 transition"
                    />
                  </div>
                  <div className="font-semibold text-lg">{listing?.name}</div>
                  <div className="font-light text-neutral-500">
                    {/* {listing?.rating} */}
                  </div>
                  <div className="font-light text-neutral-500">
                    {/* {listing?.user_ratings_total} */}
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">{listing?.rating}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </Container>
  );
}
