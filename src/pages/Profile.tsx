import { Grid, GridItem } from "@chakra-ui/react";
import { SocialProfile } from "../components/Profile/SocialProfile";
import { YourStorage } from "../components/Profile/YourStorage";
import { UploadFiles } from "../components/Profile/UploadFiles";
import { AllProjects } from "../components/Profile/AllProjects";
import { GeneralInformation } from "../components/Profile/GeneralInformation";
import { Notification } from "../components/Profile/Notification";

export const Profile = () => {
  return (
    <Grid
      css={{
        "& > * > *": {
          borderRadius: "3xl",
          width: "100%",
          padding: "15px",
          overflowY: "auto",
          minWidth: "0",
          backgroundColor: "bg.primary",
        },
      }}
      gap="20px"
      mx="30px"
      gridTemplateColumns={"1fr 1fr 1fr 1fr"}
    >
      <GridItem colSpan={{ base: 4, md: 1 }}>
        <SocialProfile />
      </GridItem>
      <GridItem colSpan={{ base: 4, md: 1 }}>
        <YourStorage />
      </GridItem>
      <GridItem colSpan={{ base: 4, md: 2 }}>
        <UploadFiles />
      </GridItem>
      <GridItem colSpan={{ base: 4, md: 1 }}>
        <AllProjects />
      </GridItem>
      <GridItem colSpan={{ base: 4, md: 2 }}>
        <GeneralInformation />
      </GridItem>
      <GridItem colSpan={{ base: 4, md: 1 }}>
        <Notification />
      </GridItem>
    </Grid>
  );
};
