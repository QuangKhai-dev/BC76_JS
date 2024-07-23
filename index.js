// Truy cập vào phần tử html thông qua ID
// thay đổi nội dung html (innerHTML)
let theH1 = document.getElementById("demo");

// theH1.innerHTML = "Hôm nay trời mưa";
// thay đổi css của một thẻ (inline-style)
theH1.style.backgroundColor = "orange";
theH1.style.textAlign = "center";

// lưu trữ nội dung trong thẻ html
let content = theH1.innerHTML; // nội dung ?
// theH1.innerHTML = theH1.innerHTML + " Lớp học vào tối t2 t6";
theH1.innerHTML += " Lớp học vào tối t2 t6";

let idTheH1 = theH1.id;
console.log(idTheH1);

// tương tác với thẻ img và thay đổi hình ảnh
let theImg = document.getElementById("hinhAnh");
theImg.src = "https://i.redd.it/6ewt085xd7131.jpg";

document.title = "Trang của Quang Khải";

// NV1: bạn được cung cấp một thẻ p. thực hiện truy cập tới thẻ p để thay đổi màu chữ thành màu vàng, nền màu đen và nội dung sẽ được canh giữa
let lorem = "lorem";
let theP = document.getElementById(lorem);
theP.style.backgroundColor = "black";
theP.style.color = "yellow";
theP.style.textAlign = "center";

// Truy cập tương tác với thẻ html thông qua querySelector
// querySelector sẽ tương tác với thẻ html đầu tiên thoả mãn điều kiện của selector bên trong. Nên lưu ý viết selector để truy cập đúng chính xác thẻ cần sử dụng
let theH3 = document.querySelector(".container .demo2");
console.log(theH3);
theH3.style.fontSize = "50px";

// Các sự kiện từ người dùng tương tác với trang web
document.querySelector(".btn-dark").onclick = function () {
  // xử lí các chức năng khi sự kiện được kích hoạt
  console.log("Tôi đã bị click");
  let taiKhoan = document.getElementById("taiKhoan").value;
  let matKhau = document.getElementById("matKhau").value;
  console.log(taiKhoan);
  console.log(matKhau);
};

// NV2: Sau khi đã được cung cấp layout, thực hiện tạo ra chức năng bấm vào nút bật đèn thì hiện bóng đèn sáng và ngược lại (gợi ý dùng sự kiện onclick và thay đổi src)
// Phạm vi hoạt động của biến hinhBongDen sẽ chỉ thực hiện trong function
// hinhBongDen khi mang ra ngoài, phạm vi hoạt động sẽ là global (tất cả mọi đoạn code trong file index.js đều có thể truy cập tới)
let hinhBongDen = document.getElementById("bongDen");
document.querySelector(".btn-success").onclick = function () {
  hinhBongDen.src = "./img/pic_bulbon.gif";
};

document.querySelector(".btn-danger").onclick = function () {
  hinhBongDen.src = "./img/pic_bulboff.gif";
};

// onmouseenter, onmouseleave, onmousemove
// hinhBongDen.addEventListener("mouseenter", function () {
//   console.log("Tôi đã đi vào bên trong thẻ img bóng đèn");
//   hinhBongDen.src = "./img/pic_bulbon.gif";
// });

hinhBongDen.addEventListener("mousemove", function () {
  console.log("Tôi đã đi vào");
});

hinhBongDen.addEventListener("mouseleave", function () {
  console.log("Tôi đã đi ra ngoài");
  hinhBongDen.src = "./img/pic_bulboff.gif";
});

// Tương tác với class trong css
// tương tác với class thông qua thuộc tính className
document.getElementById("demo_class").className = "text-green fs-1";
document.getElementById("demo_class").className = " border abc xyz";

document.querySelector(".btn-primary").onclick = function () {
  // document.getElementById("demo_class").className += " fs-1";
  // document.getElementById("demo_class").classList.add("fs-1");
  // document.getElementById("demo_class").classList.remove("abc");
  document.querySelector("body").classList.toggle("dark");
};
