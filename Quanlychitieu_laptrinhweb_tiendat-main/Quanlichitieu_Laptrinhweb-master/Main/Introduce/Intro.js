document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startNowBtn");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      // Khi bấm "Bắt đầu ngay – Miễn phí" -> sang trang đăng ký
      window.location.href = "../../Register/register.html";

      // Nếu muốn chuyển sang login thì thay thành:
      // window.location.href = "../Login/login.html";
    });
  }
});
