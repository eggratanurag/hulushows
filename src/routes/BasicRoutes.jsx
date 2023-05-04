import { useLocation } from "react-router-dom";

function BasicRoutes() {
    let location = useLocation().pathname;
    const navObject = [
      { name: "Shows", href: "/", current: location === "/" ? true : false },
      {
        name: "Booked",
        href: "/booked-shows",
        current: location == "/booked-shows" ? true : false,
      },

    ];
    return navObject;
  }
  export default BasicRoutes