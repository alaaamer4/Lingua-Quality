/** @jsxImportSource theme-ui */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Fast Performance",
    text: "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Pro Subscription",
    title: "Pro Subscription",
    text: "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Partnership deal",
    title: "Partnership deal",
    text: "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text: "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.",
  },
];

export default function Feature() {
  return (
    <section variant="section.feature" id="feature">
      <Container sx={styles.container}>
        <SectionHeader
          slogan="Quality Features"
          title="Amazing Features"
          isWhite
        />
        <Grid sx={styles.grid}>
          {data.map((d) => (
            <FeatureCard
              src={d.imgSrc}
              key={d.id}
              altText={d.altText}
              title={d.title}
              text={d.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  container: {
    marginTop: "2rem ",
    marginBottom: "4rem",
  },
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
