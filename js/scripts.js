window.onload = function(event) {
  event.preventDefault();
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let cream1 = document.getElementById("cream1").value;
    let cream2 = document.getElementById("cream2").value;
    let cream3 = document.getElementById("cream3").value;
    const creamArray = [cream1, cream2, cream3];
    creamArray.join("");
    const div = document.createElement("div");
    document.querySelector("body").append(div)
    const unList = document.createElement("ul")
      document.querySelector("div").append(unList)
      const liCrOne = document.createElement("li")
      const liCrTwo = document.createElement("li")
      const liCrThree = document.createElement("li")
      liCrOne.append(creamArray[0]);
      liCrTwo.append(creamArray[1]);
      liCrThree.append(creamArray[2]);
      document.querySelector("ul").append(liCrOne, liCrTwo, liCrThree);
      const mixArray = []
      mixArray.push(creamArray[1], creamArray[0], creamArray[2]);
      mixArray.join("")
      const nunList = document.createElement("ul")
      document.querySelector("div").append(nunList)
      const nunOne = document.createElement("li")
      const nunTwo = document.createElement("li")
      const nunThree = document.createElement("li")
      nunOne.append(mixArray[0]);
      nunTwo.append(mixArray[1]);
      nunThree.append(mixArray[2]);
      document.querySelector("ul").append(nunOne, nunTwo, nunThree);
    })
  }