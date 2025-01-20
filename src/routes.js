import { index, layout, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.jsx"),
  layout("./layouts/rootLayout.jsx", [
    index("./routes/plant/print.jsx"),
    route("login", "./routes/login.jsx"),
    // layout("layouts/privateLayout.jsx", [
    //   route("plant-print", "routes/plant/print.jsx"),
    // ]),
  ]),
];
