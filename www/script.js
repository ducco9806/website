document.addEventListener('DOMContentLoaded', function() {
    // Xử lý form đăng nhập
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Ngăn chặn form gửi đi
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Đây là nơi bạn sẽ gửi dữ liệu đến server trong một ứng dụng thực tế
            // Tạm thời, chúng ta chỉ hiển thị một thông báo
            alert(`Đăng nhập thành công với Username: ${username} và Mật khẩu: ${password}`);
            // Trong thực tế, bạn sẽ chuyển hướng người dùng đến trang dashboard hoặc trang chính sau khi đăng nhập thành công
            // window.location.href = "dashboard.html";
        });
    }

    // Xử lý form đăng ký
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Ngăn chặn form gửi đi
            const regUsername = document.getElementById('regUsername').value;
            const regEmail = document.getElementById('regEmail').value;
            const regPassword = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (regPassword !== confirmPassword) {
                alert('Mật khẩu xác nhận không khớp!');
                return;
            }

            // Đây là nơi bạn sẽ gửi dữ liệu đến server trong một ứng dụng thực tế
            // Tạm thời, chúng ta chỉ hiển thị một thông báo
            alert(`Đăng ký thành công!\nUsername: ${regUsername}\nEmail: ${regEmail}`);
            // Trong thực tế, bạn sẽ chuyển hướng người dùng đến trang đăng nhập hoặc trang xác nhận
            // window.location.href = "login.html";
        });
    }
});