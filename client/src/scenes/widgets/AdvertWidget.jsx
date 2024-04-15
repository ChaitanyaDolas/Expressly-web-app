import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Prime Energy</Typography>
        <Typography color={medium}>drinkprime.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        PRIME was developed to fill the void where great taste meets function. With bold, thirst-quenching flavors to help you refresh, replenish, and refuel, PRIME is the perfect boost for any endeavor. We're confident you'll love it as much as we do.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
