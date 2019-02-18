import React from "react";
const consumerIf = (children, Consumer) =>
  typeof children === "function" ? <Consumer>{children}</Consumer> : children;
export default consumerIf;
