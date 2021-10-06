import LaptopList from "../components/main/laptopList/LaptopList";
import PhoneList from "../components/main/phoneList/PhoneList";

export const productsRoutes = [
  {
    name: "Phones",
    path: "/phones",
    component: PhoneList,
    exact: true,
  },
  {
    name: "Laptops",
    path: "/laptops",
    component: LaptopList,
    exact: true,
  },
];