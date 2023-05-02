import fs from "node:fs";
import path from "node:path";
import ChildProcess from "node:child_process";

const DEST = path.resolve(__dirname, "dist");
const SOURCES = ["pages", "public"].map((s) => path.resolve(__dirname, s));
const CACHE_PATH = ["pages", "public"].map((s) => path.resolve(__dirname, s));

function copy(src: string, dest: string) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}
function copyDir(srcDir: string, destDir: string) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

function getCacheURL() {
  const cache_url: string[] = [];
  const _travel = (dir: string) => {
    const stat = fs.statSync(dir);
    if (stat.isDirectory()) {
      const files = fs.readdirSync(dir);
      files.forEach((file) => {
        if (fs.statSync(path.resolve(dir, file)).isDirectory()) {
          const navDir =
            "/" +
            path
              .relative(__dirname, path.resolve(dir, file))
              .split("/")
              .slice(1)
              .join("/");
          cache_url.push(navDir);
          cache_url.push(navDir + "/");
          _travel(path.resolve(dir, file));
        } else {
          cache_url.push(
            "/" +
              path
                .relative(__dirname, path.resolve(dir, file))
                .split("/")
                .slice(1)
                .join("/")
          );
        }
      });
    }
  };
  CACHE_PATH.forEach((p) => _travel(p));
  cache_url.push("/");
  return cache_url;
}

function getVersion() {
  try {
    return ChildProcess.execSync("git rev-parse --short HEAD")
      .toString()
      .trim();
  } catch (e) {
    console.error("Failed to get git version");
    return "unknown";
  }
}

function build() {
  // copy
  SOURCES.forEach((s) => {
    copyDir(s, DEST);
  });

  const str = fs
    .readFileSync("./_serviceWorker.js")
    .toString()
    .replace(
      '"$CACHE_URL$"',
      `[${getCacheURL()
        .map((i) => `"${i}"`)
        .join(", ")}]`
    )
    .replace('"$VERSION$"', `"${getVersion()}"`);

  fs.writeFileSync(path.resolve(DEST, "./serviceWorker.js"), str);
}

build();
