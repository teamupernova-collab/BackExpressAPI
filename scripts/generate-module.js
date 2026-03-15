const fs = require("fs");
const path = require("path");

const moduleName = process.argv[2];

if (!moduleName) {
  console.log("Debes indicar el nombre del módulo");
  process.exit(1);
}

const name = moduleName.toLowerCase();
const Name = name.charAt(0).toUpperCase() + name.slice(1);

const modulePath = `src/modules/${name}`;
const templatePath = `templates`;

const files = [
  "controller",
  "model",
  "routes",
  "schema",
  "services",
  "types"
];

if (!fs.existsSync(modulePath)) {
  fs.mkdirSync(modulePath, { recursive: true });
}

files.forEach(file => {
  const template = fs.readFileSync(`${templatePath}/${file}.tpl`, "utf8");

  const content = template
    .replace(/{{name}}/g, name)
    .replace(/{{Name}}/g, Name);

  fs.writeFileSync(`${modulePath}/${name}.${file}.ts`, content);
});

console.log(`Modulo ${Name} creado`);