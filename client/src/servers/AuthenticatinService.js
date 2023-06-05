import Api from "@/servers/Api";

export default {
  register(credentials) {
    return Api().post("/register", credentials);
  },
};

// AuthenticatinService.register({
//   email: "testing@gmail.com",
//   password: "12345",
// });
