let guestArr = JSON.parse(localStorage.getItem("guestArr"));
if (guestArr === null) {
  localStorage.setItem("guestArr", JSON.stringify([]));
}
const btns = document.querySelectorAll(".btn");
btns.forEach((buttton) => {
  buttton.addEventListener("click", function (event) {
    let nameSurname = document.getElementById("inp").value;
    let guestArr = JSON.parse(localStorage.getItem("guestArr"));
    document.getElementById("inp").value = "";
    let id = event.target.id;
    switch (id) {
      case "add-start":
        guestArr.unshift(nameSurname);
        break;
      case "add-end":
        guestArr.push(nameSurname);
        break;
      case "remove-first":
        guestArr.shift();
        break;
      case "remove-last":
        guestArr.pop();
        break;
      case "reverse-list":
        guestArr.reverse();
        break;
      case "remove-list":
        guestArr = [];
        break;
      default:
    }
    localStorage.setItem("guestArr", JSON.stringify(guestArr));
    drawGestList();
  });
});
let drawGestList = () => {
  document.getElementById("lists").textContent = "";
  let guestArr = JSON.parse(localStorage.getItem("guestArr"));
  if (guestArr.length > 0) {
    guestArr.forEach((list1) => {
      let myContent = document.createElement("li");
      myContent.textContent = list1;
      document.getElementById("lists").appendChild(myContent);
    });
  }
};
drawGestList();
