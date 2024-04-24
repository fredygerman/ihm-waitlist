"use client";
import { SubscribeButton } from "./subscribe-button";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = () => {
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter">
      <div className="container py-12 sm:py-16">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our Daily{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Newsletter
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Get the latest updates, news, and special offers delivered directly to
          your inbox.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="leomirandadev@gmail.com"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <SubscribeButton text="Subscribe" onClick={handleSubmit} />
        </form>
      </div>

      {/* <hr className="w-11/12 mx-auto" /> */}
    </section>
  );
};
