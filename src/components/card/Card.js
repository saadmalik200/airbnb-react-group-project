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

export default function ContainerResponsive({ item }) {
  const { state, dispatch } = useContext(Context);
  const images = [
    "https://a0.muscache.com/im/pictures/4532d3d4-dd10-472c-bc9b-fda35645f074.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/42943aae-a61d-44cf-ac74-032872b406ec.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/f080ece9-3d5d-4686-b1f3-fbd66ae8f181.jpg?im_w=720",
  ];

  console.log(state);

  return (
    <Box sx={{ minHeight: 350 }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          padding: 0,
          width: 320,
          gridColumn: "span 2",
          flexDirection: "row",
          flexWrap: "wrap",
          resize: "horizontal",
          overflow: "hidden",
          gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
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
            width: 318,
          }}
        >
          <IconButton
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
                zIndex: "5",
                color: "maroon",
              }}
            />
          </IconButton>
          <Carousel
            sx={{
              marginBottom: "15px",
            }}
          >
            {item?.images.map((image, i) => (
              <div
                style={{
                  height: "302px",
                  width: "318px",
                }}
              >
                <img
                  key={i}
                  src={image}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "15px",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </Box>

        <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
          <div>
            <Typography
              level="h2"
              fontWeight="lg"
              sx={{ fontSize: "md" }}
              mb={0.5}
            >
              <Link
                href="#container-responsive"
                overlay
                underline="none"
                sx={{
                  color: "text.primary",
                  height: "50px",
                  "&.Mui-focusVisible:after": { outlineOffset: "-4px" },
                }}
              >
                {item.city} {item.country}
              </Link>
            </Typography>
            <Typography sx={{ color: "gray" }} level="body2">
              193 kilometer away
            </Typography>
            <Typography sx={{ color: "gray" }} level="body2">
              Date
            </Typography>
            <Typography level="body2">
              <strong>$ {item.price}</strong> night
            </Typography>
          </div>
        </Box>
      </Card>
    </Box>
  );
}
