import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import Carousel from "react-material-ui-carousel";
import { Context } from "../../context/Context";
import { useContext } from "react";
import GeoData from "./Geolocation";

import { BsFillStarFill } from "react-icons/bs";

export default function ContainerResponsive({ item, i }) {
  const { state, dispatch } = useContext(Context);
  //console.log("this file", state);
  // const images = [
  //   "https://a0.muscache.com/im/pictures/4532d3d4-dd10-472c-bc9b-fda35645f074.jpg?im_w=1200",
  //   "https://a0.muscache.com/im/pictures/42943aae-a61d-44cf-ac74-032872b406ec.jpg?im_w=720",
  //   "https://a0.muscache.com/im/pictures/f080ece9-3d5d-4686-b1f3-fbd66ae8f181.jpg?im_w=720",
  // ];

  // console.log(state);

  return (
    <Box sx={{ height: 418.34 }}>
      <GeoData lat={item.latlong[0]} lng={item.latlong[1]} />
      <Card
        // variant="outlined"
        sx={(theme) => ({
          padding: 0,
          width: 335.22,
          height: 418.34,
          gridColumn: "span 2",
          flexDirection: "row",
          flexWrap: "wrap",
          resize: "horizontal",
          overflow: "hidden",
          // gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: "translateY(-2px)",
          },
          "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
        })}
      >
        <Box
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            width: 335.22,
          }}
        >
          <div
            size="sm"
            variant="plain"
            color="neutral"
            sx={{ ml: "auto", alignSelf: "flex-start" }}
          >
            {" "}
            <FavoriteBorderRoundedIcon
              color="danger"
              sx={{
                bottom: "-120%",
                left: "-100%",
                position: "relative",

                color: "maroon",
              }}
            />
          </div>
          <Carousel
            interval={null}
            sx={{
              height: 318.44,
            }}
            indicatorContainerProps={{
              style: {
                marginTop: "-30px", // 5
                textAlign: "center", // 4
                zIndex: "99",
              },
            }}
            indicatorIconButtonProps={{
              style: {
                padding: "2px", // 1
                height: "1px",
                marginRight: "10px",
                width: "1px",
                color: "white", // 3
              },
            }}
          >
            {item?.images.map((image, i) => (
              <div
                style={{
                  height: "318.44px",
                  width: "335.22px",
                  zIndex: "-1",
                }}
              >
                <img
                  key={i}
                  src={image}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "15px",
                    zIndex: "-5",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 0,
            mt: "auto",
            fontSize: "15px",
            lineHeight: "19px",
          }}
        >
          <div>
            <Typography style={{ display: "flex" }} level="h2" fontWeight="lg">
              <p className="w-[28rem]">
                {item.city.slice(0, 15)} {item.country}{" "}
              </p>
              <div className="flex gap-2 items-center">
                <BsFillStarFill />
                <p>{item.rating}</p>
              </div>
            </Typography>
            <Typography sx={{ color: "gray" }} level="body2">
              {state.distance[i]} kilometer away
            </Typography>
            <Typography sx={{ color: "gray" }} level="body2">
              {item.date}
            </Typography>
            <Typography level="body2">
              <strong>€ {item.price}</strong> night
            </Typography>
          </div>
        </Box>
      </Card>
    </Box>
  );
}
