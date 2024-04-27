// import { Button } from "./ui/button";
// import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
// import Link from "next/link";

export const NewAbout = () => {
  return (
    <section className="container  place-items-center   gap-10">
      <div className="space-y-6 text-center lg:text-center">
        <main className="text-5xl font-bold md:text-6xl">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] bg-clip-text text-transparent">
              All the data.
            </span>{" "}
            All in one place. Made for
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              sneakerheads.
            </span>{" "}
          </h2>
        </main>

        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          Get real-time pricing insights, product info, and more. It&apos;s like
          your Bloomberg Terminal for the sneaker market.
        </p>
      </div>

      {/* Hero cards sections
      <div className="z-10">
        <HeroCards />
      </div> */}

      {/* Shadow effect */}
      {/* <div className="shadow"></div> */}
    </section>
  );
};
