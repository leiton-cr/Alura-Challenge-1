const ENCRYPTION = { e:"enter", i: "imes", o: "ober", u: "ufat", a: "ai" }

export default class Encrypter {
  static encrypt = (data) => {
    let result = "";
    data.split("").forEach(char => result += ENCRYPTION[char] ? ENCRYPTION[char] : char );
    return result;
  };

  static decrypt = (data) => {
    const result = data
      .replaceAll(/enter/g, "e")
      .replaceAll(/imes/g, "i")
      .replaceAll(/ober/g, "o")
      .replaceAll(/ufat/g, "u")
      .replaceAll(/ai/g, "a");
    return result;
  };
}