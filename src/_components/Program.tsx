import FramerCard from "./FramerCard";
import Section from "./Section";

export default function Program() {
  return (
    <Section className="bg-border">
      <div className="">
        <div className="">
          <h2 className="text-left uppercase text-[2rem] font-caption text-primary font-medium mb-2">
            nos programmes et options
          </h2>
          <p className="text-left font-roboto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            possimus perspiciatis laudantium consequatur incidunt reprehenderit
            est cumque maxime consectetur? Culpa!
          </p>
        </div>
        <div className="font-roboto">
          <FramerCard />
        </div>
      </div>
    </Section>
  );
}
