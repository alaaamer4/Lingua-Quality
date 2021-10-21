/** @jsx jsx */
import { useColorMode } from "@theme-ui/color-modes";
import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/core";
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoLight from "assets/logo.png";
import LogoDark from "assets/logoDark.png";
import { FaSun, FaMoon } from "react-icons/fa";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";

export default function Header({ className }) {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header sx={styles.header} className={className}>
      <Container sx={styles.container}>
        <Logo src={colorMode === "light" ? LogoLight : LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((mi, i) => (
            <Link
              activeClass="active"
              key={i}
              to={mi.path}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {mi.label}
            </Link>
          ))}
        </Flex>
        <Button
          className="donate__btn"
          variant="secondary"
          aria-label="Contact Us"
        >
          Contact Us
        </Button>
        <MobileDrawer />
        <button
          sx={styles.themeIcon}
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          {colorMode === "light" ? (
            <FaSun size="30px" color="#EDC92B" />
          ) : (
            <FaMoon color="#f2f2f2" size="30px" />
          )}
        </button>
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  themeIcon: {
    background: "transparent",
    border: "none",
    marginLeft: "1rem",
    cursor: "pointer",
    "&:active": {
      border: "none",
      outline: "none",
    },
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background_secondary",
      color: "text_secondary",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
};
