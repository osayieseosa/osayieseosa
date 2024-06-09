"use client";

// Next
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(
  async () =>
    import(
      /* webpackChunkName: "react-player" */
      "react-player"
    ),
  { ssr: false },
);

export default function Video({ className, ...props }:any) {
  return (
    <div
      className={"relative aspect-video overflow-hidden rounded"+className}
    >
      <ReactPlayer
        {...props}
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
      />
    </div>
  );
}