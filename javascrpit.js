// Chờ toàn bộ nội dung trang được tải xong
document.addEventListener('DOMContentLoaded', (event) => {
    // Lấy phần tử card và phần tử audio bằng ID của chúng
    const clickableCard = document.getElementById('clickable-card');
    const birthdaySong = document.getElementById('birthday-song');
    const instructionText = document.querySelector('.instruction'); // Lấy phần tử hướng dẫn

    let hasPlayed = false; // Biến để kiểm tra xem nhạc đã phát chưa

    // Kiểm tra xem cả hai phần tử có thực sự tồn tại trên trang không
    if (clickableCard && birthdaySong) {
        // Gắn một trình lắng nghe sự kiện 'click' vào card
        clickableCard.addEventListener('click', function() {
            // Chỉ phát nhạc nếu nó chưa được phát
            if (!hasPlayed) {
                console.log("Đã nhấn vào card, chuẩn bị phát nhạc...");
                // Thử phát nhạc
                const playPromise = birthdaySong.play();

                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        // Phát nhạc thành công
                        console.log("Nhạc đang phát!");
                        hasPlayed = true; // Đánh dấu là đã phát
                        // Ẩn dòng hướng dẫn sau khi nhạc bắt đầu phát
                        if(instructionText) {
                            instructionText.style.display = 'none';
                        }
                    }).catch(error => {
                        // Xử lý lỗi nếu không phát được nhạc (ví dụ: trình duyệt chặn)
                        console.error("Lỗi khi phát nhạc:", error);
                        // Thông báo cho người dùng nếu cần
                        alert("Không thể tự động phát nhạc. Hãy thử kiểm tra cài đặt trình duyệt hoặc nhấn vào trang lần nữa.");
                    });
                }
            } else {
                console.log("Nhạc đã được phát trước đó.");
                // Nếu bạn muốn nhạc phát lại mỗi lần nhấn, hãy xóa điều kiện if(!hasPlayed)
                // và thêm dòng sau để tua về đầu trước khi phát:
                // birthdaySong.currentTime = 0;
                // birthdaySong.play();
            }
        });
    } else {
        // Ghi lỗi ra console nếu không tìm thấy phần tử
        console.error("Không tìm thấy phần tử 'clickable-card' hoặc 'birthday-song'.");
    }
});