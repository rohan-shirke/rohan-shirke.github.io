import React from "react";
import { personalInfo } from "../data";

function Info() {
  return (
    <>
      {personalInfo.map(({ title, description, link }, index) => {
        return (
          <li className="info__item" key={index}>
            <span className="info__title">{title}</span>
            <span className="info__description">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {description}
                </a>
              ) : (
                description
              )}
            </span>
          </li>
        );
      })}
    </>
  );
}

export default Info;
