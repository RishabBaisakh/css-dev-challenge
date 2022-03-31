import React from "react";
import "./SkullContainer.css";

export interface SkullContainerProps {
  primaryTitle: string;
  secondaryTitle: string;
  text: string;
  height: number;
  width: number;
  bgImageURL: string;
  breakTitle?: boolean;
}

function SkullContainer({
  primaryTitle,
  secondaryTitle,
  text,
  height,
  width,
  bgImageURL,
  breakTitle,
}: SkullContainerProps) {
  return (
    <div
      className="skull"
      style={{
        background: `url(${bgImageURL})`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="skullBar">
        <h2>
          {primaryTitle}

          {breakTitle ? <br /> : " "}
          <span className="secondaryTitle">{secondaryTitle}</span>
        </h2>
        <p className="opacity-50">{text}</p>
      </div>
    </div>
  );
}

export default SkullContainer;
