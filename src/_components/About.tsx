/* eslint-disable react/no-unescaped-entities */
import Section from "./Section";
import Slider from "./SliderAbout";

export default function About() {
  return (
    <Section className="bg-background">
      <div className="my-8 flex flex-col md:flex-row gap-4">
        <div className="flex flex-col md:flex-1">
          <h2 className=" text-left uppercase text-[2rem] font-caption text-primary font-medium mb-2">
            présentation de l'école
          </h2>
          <div className="text-left font-roboto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            perferendis. Eveniet quas eum, in libero distinctio obcaecati
            itaque, quasi eligendi ducimus suscipit, optio nesciunt vero
            laudantium culpa dignissimos consectetur enim? perferendis. Eveniet
            quas eum, in libero distinctio obcaecati itaque, quasi eligendi
            ducimus suscipit, optio nesciunt vero laudantium culpa dignissimos
            consectetur enim? <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            perferendis. Eveniet quas eum, in libero distinctio obcaecati
            itaque, quasi eligendi ducimus suscipit, optio nesciunt vero
            laudantium culpa dignissimos consectetur enim? perferendis. Eveniet
            quas eum, in libero distinctio obcaecati itaque, quasi eligendi
            ducimus suscipit, optio nesciunt vero laudantium culpa dignissimos
            consectetur enim?
          </div>
        </div>
        <div className="flex items-center md:flex-1">
          <Slider />
        </div>
      </div>
    </Section>
  );
}
