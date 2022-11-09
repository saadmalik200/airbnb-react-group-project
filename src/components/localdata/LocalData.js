import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";

const data = [
  {
    name: "44 Sardine Slow Life Houseboat - Carsibor Island",
    rating: "4.25",
    num_reviews: 147,
    city: "",
    country: "Poland",
    price: "106",
    superhost: "true",
    host: "Sebastian",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/4532d3d4-dd10-472c-bc9b-fda35645f074.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/f080ece9-3d5d-4686-b1f3-fbd66ae8f181.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/42943aae-a61d-44cf-ac74-032872b406ec.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e57df990-3268-4c4e-8fbf-b430675d6696.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/a9add02a-76e5-4ec3-b25f-c6bfc00ca512.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31259411/original/6d65b71b-31e2-4751-8f68-feaddda1481a.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/45292c18-7615-40e9-9da3-e2a499d0045b.jpg?im_w=1200",
    ],
    latlong: ["53.86329846276284", "14.286039249140556"],
    description:
      "The island is incredibly picturesque. The green area is surrounded by old-growth pine trees, old pine trees, oak trees, donkeys, donkeys, donkeys, and blue. They have long and lovely hiking trails through the forests and woods. Karsibor is an important hub of water sports and fishing. It is a unique cycling experience. The village houses a 15th-century church.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
    about:
      "The 44 Sardine is the perfect time to reconnect with the wildlife, watch the water, and adventure on the water.Heads up! There's a lot of work going on on bike paths, sidewalks, and roads. To get to the Marina, take the detour around 500m and the last 50m of paved road. If the work is happening in the area, there may be noise: the work of the digester, the pavement, etc. ",
  },
  {
    name: "Private room in serviced apartment hosted by Sylvia",
    rating: "4.7",
    reviews: 102,
    city: "Schladming, Steiermark",
    country: "Austria",
    price: "316",
    superhost: "true",
    host: "Sylvia",
    guests: 4,
    bedrooms: 2,
    beds: 4,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/3ed0cf4d-6016-4485-be4d-6f1a8ab758ff.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/17f6e5ac-007d-4664-8dcc-f9a254bcb73f.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/0b6775a6-a0bc-4d8f-9602-ace39701114e.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/e6a2f788-2967-4cb8-8f71-195425ab3194.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/cf30fcd4-c31b-4de3-b86f-f16caa264c7b.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/e0deaffb-b2fe-4f08-a1f6-87b536f2a9fe.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-585198300657215100/original/0db2b954-598f-4a2e-ad78-1161baf44bee.jpeg?im_w=1200",
    ],
    latlong: ["47.372987385108416", "13.724369913599194"],
    description:
      "In the 62m² apartment with sauna, you can live wonderfully with four people. Including terrace & balcony with roof stone view. You can order your breakfast with regional delicacies as you please. The kitchen is fully equipped with an oven, dishwasher, etc. Upon arrival, you will find coffee, tea, salt, pepper & sugar. We will tell you about our recommendations for food.Located directly on the ski slope. Shoe room, ski cellar, bike room and sockets for e-bike & e-car available.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },
  {
    name: "Entire rental unit hosted by Julia",
    rating: "4.12",
    num_reviews: 144,
    city: "Geisenheim, Hessen",
    country: "Germany",
    price: "76",
    superhost: "false",
    host: "Julia",
    guests: 5,
    bedrooms: 2,
    beds: 3,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/4532d3d4-dd10-472c-bc9b-fda35645f074.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/f080ece9-3d5d-4686-b1f3-fbd66ae8f181.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/42943aae-a61d-44cf-ac74-032872b406ec.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e57df990-3268-4c4e-8fbf-b430675d6696.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/a9add02a-76e5-4ec3-b25f-c6bfc00ca512.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31259411/original/6d65b71b-31e2-4751-8f68-feaddda1481a.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/45292c18-7615-40e9-9da3-e2a499d0045b.jpg?im_w=1200",
    ],
    latlong: ["49.970337179185584", "7.945917259737131"],
    description:
      "Go on holiday where the late harvest was discovered - in Johannisberg, a stone's throw from the Johannisberg Abbey. The 70 sqm light-flooded jewel on the 2nd floor is centrally located and invites you to hikes and wine tastings.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
    about:
      "The 44 Sardine is the perfect time to reconnect with the wildlife, watch the water, and adventure on the water.Heads up! There's a lot of work going on on bike paths, sidewalks, and roads. To get to the Marina, take the detour around 500m and the last 50m of paved road. If the work is happening in the area, there may be noise: the work of the digester, the pavement, etc. ",
  },
  {
    name: "Entire rental unit hosted by Julia",
    rating: "4.12",
    num_reviews: 144,
    city: "Geisenheim, Hessen",
    country: "Germany",
    price: "76",
    superhost: "false",
    host: "Julia",
    guests: 5,
    bedrooms: 2,
    beds: 3,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/4532d3d4-dd10-472c-bc9b-fda35645f074.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/f080ece9-3d5d-4686-b1f3-fbd66ae8f181.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/42943aae-a61d-44cf-ac74-032872b406ec.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e57df990-3268-4c4e-8fbf-b430675d6696.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/a9add02a-76e5-4ec3-b25f-c6bfc00ca512.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31259411/original/6d65b71b-31e2-4751-8f68-feaddda1481a.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/45292c18-7615-40e9-9da3-e2a499d0045b.jpg?im_w=1200",
    ],
    latlong: ["49.970337179185584", "7.945917259737131"],
    description:
      "Go on holiday where the late harvest was discovered - in Johannisberg, a stone's throw from the Johannisberg Abbey. The 70 sqm light-flooded jewel on the 2nd floor is centrally located and invites you to hikes and wine tastings.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
    about:
      "The 44 Sardine is the perfect time to reconnect with the wildlife, watch the water, and adventure on the water.Heads up! There's a lot of work going on on bike paths, sidewalks, and roads. To get to the Marina, take the detour around 500m and the last 50m of paved road. If the work is happening in the area, there may be noise: the work of the digester, the pavement, etc",
  },

  {
    name: "Entire home hosted by Marieke",
    rating: "4.26",
    num_reviews: 17,
    city: "Sint-Oedenrode, Noord-Brabant",
    country: "Netherlands",
    price: "355",
    superhost: "false",
    host: "Marieke",
    guests: 8,
    bedrooms: 4,
    beds: 6,
    bath: 2,
    images: [
      "https://a0.muscache.com/im/pictures/4532d3d4-dd10-472c-bc9b-fda35645f074.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/f080ece9-3d5d-4686-b1f3-fbd66ae8f181.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/42943aae-a61d-44cf-ac74-032872b406ec.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/e57df990-3268-4c4e-8fbf-b430675d6696.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/a9add02a-76e5-4ec3-b25f-c6bfc00ca512.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-31259411/original/6d65b71b-31e2-4751-8f68-feaddda1481a.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/45292c18-7615-40e9-9da3-e2a499d0045b.jpg?im_w=1200",
    ],
    latlong: ["51.55830158266192", "5.419437777305826"],
    description:
      "Luxuriously furnished vacation home with all the comforts, made in a historic jacket.4 bedrooms, 2 bathrooms and a lovely private terrace directly adjacent to the horse meadows.De Oude Stal and De Woelige Stal are two separate vacation homes for each 4 people that can be linked by means of a large sliding wall to one large house: De Oude Woelige Stal for 8 people.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },

  {
    name: "Entire rental unit hosted by Sara",
    rating: "4.66",
    num_reviews: 67,
    city: "Vielsalm, Wallonie",
    country: "Belgium",
    price: "95",
    superhost: "false",
    host: "Sara",
    guests: 2,
    bedrooms: 1,
    beds: 2,
    bath: 1,
    images: [
      "https://a0.muscache.com/im/pictures/e94d6428-8206-4dc6-b4a2-d299c2e22618.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/3228f1eb-ab6d-409c-8c83-33202fd7183a.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-50006894/original/94fd3065-98a1-4c69-8eaf-64e512ee7cae.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/310951e5-360c-43be-b691-132f4809985d.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/8bc9bb30-a7e8-429a-8471-9b5250ee5d1e.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-50006894/original/46b76b6c-3f40-49e3-9508-e10942b25045.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-50006894/original/4b5f7f1d-564d-4094-8329-b22117ee4a97.jpeg?im_w=1200",
    ],
    latlong: ["50.26886695552791", "5.9059808029102445"],
    description:
      "The strengths of VLS Studio are above all its location, its facilities, its comfort and its atypical decoration.The apartment is located close to the city center, the train station and the lake of Vielsalm - Les Doyards Linen, necessary for cooking : all you have to do is put your bags down !Ideal for a romantic weekend, a few days of vacation or a business trip.",
    reviews: [
      "Perfect place to chill and enjoy the nature.The house is super beautiful and also the place in general.I Simply love it and will definitely come back!",
      "we are grateful for this magical stay on this houseboat with many wonderful moments...gladly again....",
      "We had a great time at Sebastians houseboat! I recommend to bring bikes.",
      "Very nice and relaxing location. Everything was perfect",
      "Everything was exactly as expected, the Interieur of the cabin is stunning, it was equipped with everything thats necessary. We can highly recommend this place. Perfect to relax and just wind down.",
    ],
  },
];

const LocalData = () => {
  const { state, dispatch } = useContext(Context);
  console.log(data);
  useEffect(() => {
    const getData = () => {
      return dispatch({ type: "localData", payload: data });
    };

    getData();
  }, [data]);
};

export default LocalData;
