const app = require("./config/server");

app.listen(
    app.get("port"),
    () => console.log("server on port:", app.get("port")
    ));