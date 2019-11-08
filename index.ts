// Import stylesheets
import "./style.css";

class Typy {
  private _language: string;
  private _guy: number;
  audience: string;
  constructor(language: string, guy?: number) {
    this._language = language;
    this._guy = guy;
  }
  get language(): string {
    return this._language;
  }
  get guy(): number {
    return this._guy;
  }
}

let type: Typy = new Typy("TypeScript", 0x813D);
console.log(type);
console.log(type.language);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>${type.language} Starter by ${type.guy}</h1>`;
