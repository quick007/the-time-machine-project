import Layout from "../components/layout";

export default function About() {
  return (
    <Layout page="about">
      <div className="mx-auto max-w-screen-md w-full mt-10 text-gray-800 space-y-6 text-lg leading-6">
        <h1 className="text-6xl font-bold text-gray-900 !mb-10">
          Artist&apos;s Statement
        </h1>
        <p className="text-justify">
          Just like you can book a ride on a plain, train, or bus today, this
          website simulates that same feeling but with time travel. Rather than
          choosing where in space you want to go, users choose where in time
          they want to go. While theres no practical way for me to actually send
          people to the future, I found that a project like this could be
          indicitive of what time travel could be like in the future. The
          selector has no limits on where you can go in time, and also allows
          you to go on a once way trip to a place if you&apos;re feeling
          adventurous.
        </p>
        <p className="text-justify">
          Inside the book, an inventor, simply known as The Time Traveller in
          most of the book, could have been a catalyst in this type of
          technology, assuming it was real ofcourse. Just like the Wright
          brothers pioneered airplanes in our world, maybe in some other world
          time travelling was invented.
        </p>
        <p className="!mt-10">
          I created my own promps and used DALL-E for all the images. While
          designing the website, I used{" "}
          <a
            href="inspiration "
            className="underline decoration-purple-600 decoration-2"
          >
            https://www.expedia.com/
          </a>{" "}
          for inspiration from a present-day travel website.
        </p>
      </div>
    </Layout>
  );
}
