const express = require("express");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const { spawn } = require("child_process");

const app = express();
const port = 4576;

const secret = process.env.GITHUB_WEBHOOK_SECRET;
const hashAlgo = "sha256";

function verifySecretKey(req, res, next) {
    const hash = req.header("X-Hub-Signature-256");
    if (!hash) return res.status(401).send("No signature header found!");
    if (!secret) throw new Error("Secret key is not defined!");

    const signature = Buffer.from(hash, "utf8");
    const hmac = crypto.createHmac(hashAlgo, secret);
    const body = JSON.stringify(req.body);
    const digest = Buffer.from(hashAlgo + "=" + hmac.update(body).digest("hex"), "utf8");

    if (signature.length !== digest.length || !crypto.timingSafeEqual(digest, signature)) {
        console.warn(new Date(), "Received request with wrong secret key!");
        return res.status(403).send(`Request body digest did not match signature`);
    }

    return next();
}

let updateTask = null;

function updateProject() {
    if (updateTask !== null) {
        console.warn("Task seems to be already running. Killing process...");
        updateTask.stdin.pause();
        updateTask.kill();
        updateTask = null;
    }

    console.log("Updating project...");
    updateTask = spawn("bash", ["scripts/bash/updateAndRebuild.sh"]);

    updateTask.stdout.on("data", data => {
        process.stdout.write(data.toString());
    });

    updateTask.stderr.on("data", data => {
        console.error(data.toString());
    });

    updateTask.on("exit", code => {
        updateTask = null;
        console.log("Child process exited with code " + code.toString());
    });
}

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/payload", verifySecretKey);

app.post("/payload", (req, res) => {
    const event = req.header("X-GitHub-Event");

    switch (event) {
        case "push":
            console.log(new Date(), "Received push event!");
            updateProject();
            break;

        default:
            console.warn(new Date(), "Received unknown event! - ", event);
    }

    res.send();
});

app.listen(port, () => {
    console.log(`GitHub Webhook listener started and running at 0.0.0.0:${port}!`);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json(err.message);
});

