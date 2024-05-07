if ("Deno" in window) {
  const paper_import = await import("npm:paper"); // Seems to create promises that never resolve, causing deno to not exit
  // const paper_import = await import("../node_modules/paper/dist/paper-full.js");
  const paper = paper_import.default;
  globalThis.paper = paper;
  paper.setup();
}

// Or import as follows
// import * as paper_import from "npm:paper";
// const paper = paper_import.default;
// globalThis.paper = paper;
// paper.setup();
console.log("setup paper");

const pathdata = "M 0 0 C 0 10 10 10 10 0 z";
console.log("Constructing path from:", pathdata);

// NOTE This library call has causes Deno to hang. Some side-effects on the event loop? I don't know.
const path = new paper.Path(pathdata);
console.log({ path });

console.log("Time to shutdown, Deno");
