import { Box, Flex, Heading, Text, Grid } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const GeneralInformation = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("profile.generalInformation.information.education"),
      description: t("profile.generalInformation.information.educationValue"),
    },
    {
      title: t("profile.generalInformation.information.language"),
      description: t("profile.generalInformation.information.languageValue"),
    },
    {
      title: t("profile.generalInformation.information.department"),
      description: t("profile.generalInformation.information.departmentValue"),
    },
    {
      title: t("profile.generalInformation.information.workHistory"),
      description: t("profile.generalInformation.information.workHistoryValue"),
    },
    {
      title: t("profile.generalInformation.information.organization"),
      description: t("profile.generalInformation.information.organizationValue"),
    },
    {
      title: t("profile.generalInformation.information.birthday"),
      description: t("profile.generalInformation.information.birthdayValue"),
    },
  ];
  return (
    <Box minH="fit" h="500px" bg="bg.primary">
      <Heading fontSize="0.9rem" fontWeight="semibold">
        {t("profile.generalInformation.header")}
      </Heading>
      <Text
        fontSize={{ md: "0.6rem", lg: "0.7rem" }}
        color="text.secondary"
        mt="2"
      >
        {t("profile.generalInformation.discription")}
      </Text>
      <Grid gridTemplateColumns="1fr 1fr" flexWrap="wrap" gap="10px" mt="10px">
        {data.map(({ title, description }, index) => (
          <Flex
          justifyItems="center"
            flexDirection="column"
            shadow={"0px 0px 10px rgba(0, 0, 0, 0.1)"}
            gridColumn={ { base: "span 2", md: "span 1" }}
            h="60px"
            ps="10px"
            gapX="10px"
            key={index}
            rounded="2xl"
            bgColor="bg.primary"
          >
            <Heading color="text.secondary" fontSize="0.6rem">{title}</Heading>
            <Text fontSize="0.8rem">
              {description}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};
