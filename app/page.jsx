import Heading from "../components/Heading";
export default function Homepage() {
  return (
    <>
      {/* birden fazla JSX öğesini gruplamak için */}
      <Heading className=" pb-3 text-4xl ">Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you.</p>
    </>
  );
}
