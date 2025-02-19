import Recruitment from "@/components/Recruitment"; // Achievement から変更

const routes = [
  {
    path: "/",
    element: <Service />
  },
  {
    path: "/recruitment", // /achievement から変更
    element: <Recruitment /> // Achievement から変更
  }
]; 