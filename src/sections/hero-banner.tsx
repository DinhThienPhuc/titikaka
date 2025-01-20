import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import ButtonLink from "../components/button-link";

const TEXT_LIST = [
  "whiteboard collaboration",
  "real-time editing",
  "AI-powered content",
  "version control efficiency",
  "real-time synchronization",
  "amazing content experience",
];

const DynamicText = () => {
  const [dynamicText, setDynamicText] = useState("");
  const runTextRef = useRef<NodeJS.Timeout>();
  const runDirectionRef = useRef<"forward" | "backward">("forward");
  const textIndexRef = useRef(0);
  const isStopRef = useRef(false);
  const secondStopIdRef = useRef<NodeJS.Timeout>();
  const thirdStopIdRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    runTextRef.current = setInterval(() => {
      setDynamicText((prev) => {
        if (isStopRef.current) {
          return prev;
        }

        if (
          runDirectionRef.current === "forward" &&
          prev.length < TEXT_LIST[textIndexRef.current].length
        ) {
          return TEXT_LIST[textIndexRef.current].substring(0, prev.length + 1);
        }

        if (
          runDirectionRef.current === "forward" &&
          prev.length === TEXT_LIST[textIndexRef.current].length
        ) {
          runDirectionRef.current = "backward";
          isStopRef.current = true;
          secondStopIdRef.current = setTimeout(() => {
            isStopRef.current = false;
            clearTimeout(secondStopIdRef.current);
          }, 3000);
          return prev;
        }

        if (runDirectionRef.current === "backward" && prev.length > 0) {
          return TEXT_LIST[textIndexRef.current].substring(0, prev.length - 1);
        }

        if (runDirectionRef.current === "backward" && prev.length === 0) {
          runDirectionRef.current = "forward";
          textIndexRef.current =
            textIndexRef.current === TEXT_LIST.length - 1
              ? 0
              : textIndexRef.current + 1;
          isStopRef.current = true;
          thirdStopIdRef.current = setTimeout(() => {
            isStopRef.current = false;
            clearTimeout(thirdStopIdRef.current);
          }, 3000);
          return prev;
        }

        return prev;
      });
    }, 200);

    return () => {
      clearInterval(runTextRef.current);
    };
  }, []);

  return (
    <span className="font-['Tobias'] text-[1em] font-light leading-[3.6rem] md:leading-[4.8rem]">
      {dynamicText}
    </span>
  );
};

const TextCursor = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span
      className={clsx(
        "inline-block w-[3px] h-[2.9rem] md:h-[4rem] lg:h-[4.2rem] bg-black",
        showCursor ? "opacity-100" : "opacity-0"
      )}
    />
  );
};

const HeroBanner = () => {
  return (
    <section className="pt-24 md:pt-[200px] bg-hero-pattern bg-no-repeat md:bg-right-top">
      <div className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto ">
        <h1 className="text-[3.6rem] md:text-[4.8rem] lg:text-[5.2rem] text-center whitespace-break-spaces font-bold leading-[3.6rem] md:leading-[4.8rem] text-balance">
          <span className="block font-poly-sans-median">
            The editor suite to build products with
          </span>
          <DynamicText />
          <TextCursor />
        </h1>
        <p className="text-xl md:text-2xl lg:text-[26px] text-center mt-8">
          Tiptap is the headless and open source editor framework. Integrate
          over 100+ extensions and paid features like collaboration and AI
          agents to create the UX you want
        </p>

        <div className="flex gap-3 justify-center mt-16">
          <ButtonLink
            href="https://cloud.tiptap.dev/register"
            variant="contained"
          >
            Sign up free
          </ButtonLink>
          <ButtonLink href="https://templates.tiptap.dev/" variant="outlined">
            Try it live
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
