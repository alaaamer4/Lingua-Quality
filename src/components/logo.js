/** @jsx jsx */
import { jsx, Image, Flex } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src, src1, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
        width: 200,
      }}
      {...rest}
    >
      <Image src={src} sx={{ width: "100%" }} />;
    </Link>
  );
}
