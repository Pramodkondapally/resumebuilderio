import homeSvg from "./homesvg";
import Components from "./components";
import Settings from "./settings";
import BlankAvatar from "./profileBox";
import Person from "./person";
import Date from "./date";
import Alert from "./alert";
import Flash from "./flash";

const Navitemsvgs = [
    {
        label: "Home",
        icon: homeSvg,
        path: "/"
    },
    {
        label: "Components",
        icon: Components,
        path: "#"
    },
    {
        label: "Person",
        icon: Person,
        path: "#"
    },
    {
        label: "Date",
        icon: Date,
        path: "#"
    },
    {
        label: "Flash",
        icon: Flash,
        path: "#"
    },
    {
        label: "Alert",
        icon: Alert,
        path: "#"
    },
    {
        label : "Settings",
        icon: Settings,
        path: "#"
    },
    {
        label : "Profile",
        icon : BlankAvatar,
        path: "#"
    }
];

export default Navitemsvgs;
