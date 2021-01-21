import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import React from "react";
const router = [
  {
    path: "/",
    component: <ComponentOne />,
  },
  {
    path: "article",
    component: <ComponentTwo />,
  },
];
// function Test() {
//   return <div>Test组件</div>;
// }
let routeList = router.map((route, index) => {
  // TODO:如何把 div 标签换成组件呢?
  return <div key={index}>{route.component}</div>;
});
function TestRoute() {
  return <div>{routeList}</div>;
}
export default TestRoute;
