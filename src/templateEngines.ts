import fs from "fs";
import { Application } from "express";

// export const configureTemplateEngine = (app: Application) => {
//   app.engine("html", (filePath, options: any, callback) => {
//     fs.readFile(filePath, (err, content) => {
//       if (err) return callback(err);
//       const rendered = content
//         .toString()
//         .replace(/#title#/g, options.title)
//         .replace(/#message#/g, options.message);
//       return callback(null, rendered);
//     });
//   });
//   app.set("views", "./src/views"); // specify the views directory
//   app.set("view engine", "html"); // register the template engine
// };

/**Upgraded version */
export const configureTemplateEngine = (app: Application) => {
  app.engine("html", (filePath, options: Record<string, any>, callback) => {
    fs.readFile(filePath, "utf-8", (err, content) => {
      if (err) return callback(err);
      let rendered = content;
      // Loop through all keys in options
      for (const [key, value] of Object.entries(options)) {
        const regex = new RegExp(`#${key}#`, "g"); // match #key#
        rendered = rendered.replace(regex, String(value ?? ""));
      }
      return callback(null, rendered);
    });
  });
  app.set("views", "./src/views"); // specify the views directory
  app.set("view engine", "html"); // register the template engine
};
