if ("Deno" in window) {
  const paper_import = await import("npm:paper"); // Seems to create promises that never resolve, causing deno to not exit
  // const paper_import = await import("../node_modules/paper/dist/paper-full.js");
  const paper = paper_import.default;
  // await import("npm:paper-jsdom");
  // await import("../node_modules/paper-jsdom/index.js");
  globalThis.paper = paper;
  paper.setup();
  console.log("setup paper");
}

const pathdata = "M 0 0 C 0 10 10 10 10 0 z";
console.log("Constructing path from:", pathdata);
const path = new paper.Path(pathdata);
console.log({ path });
console.log("Time to shutdown, Deno");
