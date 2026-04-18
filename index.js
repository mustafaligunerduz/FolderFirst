const organize = require("./lib/organizer");

const dir = process.argv[2] || "./";

organize(dir);
