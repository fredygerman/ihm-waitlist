"use client";
import { SubscribeButton } from "./subscribe-button";
// import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = () => {
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter">
      <div className="container py-4">
        <h3 className="text-center text-4xl font-bold text-white md:text-5xl">
          Join Us{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
            Now
          </span>
        </h3>
        <p className="mb-8 mt-4 text-center text-xl text-muted-foreground">
          Navigate Tomorrow with Us
        </p>

        <form
          className="mx-auto flex w-full flex-col gap-4 md:w-6/12 md:flex-row md:gap-2 lg:w-4/12"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="hassan@gmail.com"
            className="bg-muted/50"
            aria-label="email"
          />
          <SubscribeButton text="Join" onClick={handleSubmit} />
        </form>
      </div>

      {/* <hr className="w-11/12 mx-auto" /> */}
    </section>
  );
};
