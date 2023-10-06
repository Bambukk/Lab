
const buttons = document.querySelectorAll(".NavBarButton");



buttons.forEach(button => {
  button.addEventListener("click", function() {
        buttons.forEach(btn => {
        btn.classList.remove("ActiveButton");
        });
        button.classList.add("ActiveButton");

  });
});