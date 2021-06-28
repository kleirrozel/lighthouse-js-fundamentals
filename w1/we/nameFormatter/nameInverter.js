const nameInverter = function(name) {
  if (name !== undefined) {
    name = name.trim();
    let inverted = "";
    
    if (name === "" || name === "Mr." || name === "Mrs." || name === "Ms." || name === "Dr.") {
    return "";
    } else if (name.startsWith("Mr.") || name.startsWith("Mrs.") || name.startsWith("Ms.") || name.startsWith("Dr.")) {
    let honorificIndex = name.indexOf(".") + 1;
    let honorific = name.slice(0, honorificIndex);
    name = name.slice(honorificIndex + 1);

    if (name.includes(" ")) {
      invertedName = name.split(" ").reverse().join(", ");
      return honorific + " " + invertedName;
    } else {
      return honorific + " " + name;
    }
  } else if (name.includes(" ")) {
    invertedName = name.split(" ").reverse().join(", ");
    return invertedName;
  }
  return name;
  }
  return "Error";
};

// Mr.
// Mrs.
// Ms.
// Dr.
module.exports = nameInverter;