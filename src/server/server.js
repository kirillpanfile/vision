import { Server } from "miragejs";
import sunglasses from "./sunglasses.json";
import prescriptionframes from "./prescriptionframes.json";
import protectiveeyeware from "./protectiveeyeware.json";
export default {
  install: () => {
    new Server({
      seeds(server) {
        server.db.loadData({
          SUNGLASSES: sunglasses,
          PRESCRIPTIONFRAMES: prescriptionframes,
          PROTECTIVEEYEWEAR: protectiveeyeware,
        });
      },
      routes() {
        this.namespace = "api";
        this.get("/sunglasses", (schema) => schema.db.SUNGLASSES);
        this.get(
          "/prescriptionframes",
          (schema) => schema.db.PRESCRIPTIONFRAMES
        );
        this.get("/protectiveeyeware", (schema) => schema.db.PROTECTIVEEYEWEAR);
      },
    });
  },
};
