const galleryImg = document.querySelectorAll(".event-img img");
const eventList = document.querySelectorAll(".event-name .e-n");

eventList.forEach(function (events){
    // gán sự kiện ' click', mỗi lần click kích hoạt việc hiện ảnh tương ứng//
    events.addEventListener('click', function() {
        const anhsukien = events.getAttribute("id");//lấy tên ảnh trong Eventlist

        //lặp lại các ảnh để xoá bỏ các ảnh cũ bằng cách xoá ảnh có class: active//
        galleryImg.forEach(img => {
            img.classList.remove("active");
        });
        // sau đó lặp qua các ảnh 1 lần nữa //
        galleryImg.forEach(img => {
            const currentAlt = img.getAttribute("alt");// xác định định danh ID trùng với alt
            if(currentAlt === anhsukien){ // Nếu alt trùng với ID//
                img.classList.add("active"); // thêm Class active vào các ảnh => các ảnh sẽ hiện ra// 
            }
        });
    });
});