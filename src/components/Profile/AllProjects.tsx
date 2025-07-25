import { Box, Heading, Text, Image, Flex, Icon } from "@chakra-ui/react";
import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
export const AllProjects = () => {
  const { t } = useTranslation();
  const data = [project1, project2, project3];
  return (
    <Box minH="fit" h="500px" bg="bg.primary">
      <Heading fontSize="0.9rem" fontWeight="semibold">
        {t("profile.allProjects.header")}
      </Heading>
      <Text
        fontSize={{ md: "0.6rem", lg: "0.7rem" }}
        color="text.secondary"
        mt="2"
      >
        {t("profile.allProjects.discription")}
      </Text>
      <Box>
        {data.map((project, index) => (
          <Flex
            shadow={"0px 0px 10px rgba(0, 0, 0, 0.1)"}
            alignItems="center"
            gapX={{base: "10px", md: "5px", xl: "10px"}}
            key={index}
            my="10px"
            p={{base: "10px",md: "5px", xl: "10px"}}
            rounded="2xl"
            bg="bg.primary"
          >
            <Image loading="lazy" src={project} alt="project" w="50px" h="50px" rounded="md" />
            <Box w="full">
              <Heading
                lineHeight="15px"
                fontSize={{ base: "0.7rem", md: "0.6rem", xl: "0.7rem" }}
                fontWeight="semibold"
              >
                {t("profile.allProjects.cards.header")}
              </Heading>
              <Flex justifyContent="space-between">
                <Flex gapX="5px">
                  <Text
                    color="brand.gray"
                    fontSize={{ base: "0.7rem", md: "0.5rem", xl: "0.7rem" }}
                  >
                    {t("profile.allProjects.cards.projectNumber")}
                  </Text>
                  <Text
                    color="text.tertiary"
                    cursor="pointer"
                    fontSize={{ base: "0.7rem", sm: "0.5rem", xl: "0.7rem" }}
                  >
                    {t("profile.allProjects.cards.details")}
                  </Text>
                </Flex>
                <Icon
                  color="text.secondary"
                  cursor="pointer"
                  fontSize={{ base: "0.7rem", md: "0.5rem", xl: "0.7rem" }}
                >
                  <FontAwesomeIcon icon={faPen} />
                </Icon>
              </Flex>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};
