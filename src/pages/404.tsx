import { Navbar } from "../components/Navbar/Navbar";

type Props = {};

export default function Custom404({}: Props) {
  return (
    <main>
      <Navbar />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        <h1>404</h1>
        <h3>😭😭 Page not found</h3>
      </section>
    </main>
  );
}
