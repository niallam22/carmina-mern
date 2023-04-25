const proxy = require("http-proxy-middleware");
module.exports = function(app) {
try {
    app.use(proxy("/server/**", { // https://github.com/chimurai/http-proxy-middleware
        target: "http://localhost:2121",
        secure: false
      })); 
} catch (error) {
    console.log(error.message);
}

};