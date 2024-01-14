declare module "*module.scss" {
  interface IClassesNames {
    [className: string]: string;
  }
  const classNames: IClassesNames;
  export = classNames;
}

declare module "*png";
declare module "*jpg";
declare module "*jpeg";
declare module "*svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
