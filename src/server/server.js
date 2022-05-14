import { Server } from "miragejs";
import sunglasses from "./sunglasses.json";
export default {
  install: () => {
    new Server({
      seeds(server) {
        server.db.loadData({
          SUNGLASSES: sunglasses,
        });
      },
      routes() {
        this.namespace = "api";
        this.get("/sunglasses", (schema) => schema.db.SUNGLASSES);
      },
    });
  },
};
