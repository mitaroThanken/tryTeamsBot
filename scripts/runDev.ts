import ngrok from "ngrok";
import nodemon from "nodemon";

if (process.env.NODE_ENV === "production") {
    console.error(
        "Do not use nodemon in production, run bin/www directly instead."
    );
    process.exit(1);
}

ngrok.connect({
    proto: "http",
    addr: process.env.PORT,
    configPath: "ngrok.yml"
}).then(url => {
    console.log(`ngrok tunnel opened at: ${url}`);
    console.log("Open the ngrok dashboard at: https://localhost:4040\n");

    nodemon({ // see nodemon.json
    }).on("start", () => {
        console.log("The application has started");
    }).on("restart", (files: string[]) => {
        console.group("Application restarted due to:")
        files.forEach(file => console.log(file));
        console.groupEnd();
    }).on("quit", () => {
        console.log("The application has quit, closing ngrok tunnel");
        ngrok.kill().then(() => process.exit(0));
    });
}).catch(error => {
    console.error("Error opening ngrok tunnel: ", error);
    process.exit(2);
});
