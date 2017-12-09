var write = document.querySelector(".write-us-button");
var popup = document.querySelector(".write-inner");
var close = document.querySelector(".modal-close");
var yourname = popup.querySelector("[name=name]");

write.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("write-inner-show");
	yourname.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("write-inner-show");
});
