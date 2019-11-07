// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Typy {
  private _language: string;
  audience: string;
  constructor(language: string) {
    this._language = language;
  }
  get language():string{
    return this._language
  }
}

let type = new Typy("TypeScript");
console.log(type);
console.log(type.language);
