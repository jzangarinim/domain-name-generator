let domainsArray = [];

function nameGenerator() {
  const pronoun = ["the", "our"];
  const adjective = ["great", "big", "strong", "colorful"];
  const noun = ["jogger", "house", "raccoon", "table"];
  const extension = [".com", ".us", ".org", ".io"];
  let finalDomain = "";

  for (let i = 0; i < pronoun.length; i++) {
    finalDomain = pronoun[i];
    for (let j = 0; j < adjective.length; j++) {
      finalDomain = pronoun[i] + adjective[j];
      for (let k = 0; k < noun.length; k++) {
        finalDomain = pronoun[i] + adjective[j] + noun[k];
        for (let l = 0; l < extension.length; l++) {
          finalDomain = pronoun[i] + adjective[j] + noun[k] + extension[l];
          domainsArray.push(finalDomain);
        }
      }
    }
  }
  return domainsArray;
}

window.onload = () => {
  nameGenerator();

  let app = document.querySelector("#app");

  let h1 = document.createElement("h1");
  h1.textContent = "Domain Name Generator";
  app.appendChild(h1);
  h1.style.textAlign = "center";
  h1.style.fontSize = "24px";

  let tables = document.createElement("div");
  app.appendChild(tables);
  tables.style.display = "flex";
  tables.style.justifyContent = "center";
  let ol = document.createElement("ol");
  let ol2 = document.createElement("ol");
  ol2.start = domainsArray.length / 2 + 1;
  tables.appendChild(ol);
  tables.appendChild(ol2);

  for (let i = 0; i < domainsArray.length / 2; i++) {
    let li = document.createElement("li");
    ol.appendChild(li);
    li.textContent = domainsArray[i];
  }

  for (let j = domainsArray.length / 2; j < domainsArray.length; j++) {
    let li = document.createElement("li");
    ol2.appendChild(li);
    li.textContent = domainsArray[j];
  }
};
