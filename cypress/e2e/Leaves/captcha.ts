import Tesseract from "tesseract.js";
import { describe } from "mocha";

describe("captcha", function () {
  it("should captcha", function () {
    Tesseract.recognize("./captcha.png", "eng", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      console.log(text);
    });
  });
});
