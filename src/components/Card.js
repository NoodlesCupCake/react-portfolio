import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack 
      bg="white"
      borderRadius="2xl"
      style={{ userSelect: 'none' }}
    >
      <Image 
        src={imageSrc}
        borderRadius="xl"
      />
      <VStack 
        p={4}
        alignItems="left"
        spacing={3}
      >
        <Heading color="black" size="md">
          {title}
        </Heading>
        <Text color="grey">
          {description}
        </Text>
        <HStack spacing={2} alignItems="center">
          <Text color="black" size="sm">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
        </HStack>
      </VStack>
  </VStack>
  );
};

export default Card;
