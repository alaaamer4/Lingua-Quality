import React from "react";
import { Box, Text, Heading } from "theme-ui";

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: "sectionHeader" }}>
      <Text
        as="p"
        sx={{
          variant: "sectionHeader.subtitle",
          color: "primary",
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: "sectionHeader.title",
          color: isWhite ? "#fff" : "#0F2137",
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
