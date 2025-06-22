import { Box, Flex, Heading, Text, Grid } from "@chakra-ui/react";
export const GeneralInformation = () => {
  const data = [
    {
      title: "Education",
      description: "Stanford University",
    },
    {
      title: "Languages",
      description: "English, Spanish, Italian",
    },
    {
      title: "Department",
      description: "Product Design",
    },
    {
      title: "Work History",
      description: "English, Spanish, Italian",
    },
    {
      title: "Organization",
      description: "Simmmple Web LLC",
    },
    {
      title: "Birthday",
      description: "20 July 1986",
    },
  ];
  return (
    <Box minH="fit" h="500px" bg="bg.primary">
      <Heading fontSize="0.9rem" fontWeight="semibold">
        General Information
      </Heading>
      <Text
        fontSize={{ md: "0.6rem", lg: "0.7rem" }}
        color="text.secondary"
        mt="2"
      >
        As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others
        a hand. We get our heart broken by people we love, even that we give
        them all...
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
