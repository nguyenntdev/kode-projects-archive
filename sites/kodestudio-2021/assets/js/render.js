var headerContent = `
<div class="container-fluid container-xl d-flex align-items-center justify-content-between">

<a href="index.html" class="logo d-flex align-items-center">
    <img src="assets/img/logo_fill.png" alt="">
    <span>Kode Space</span>
</a>

<nav id="navbar" class="navbar">
    <div class="vertical-center">
        <ul>
            <li><a class="nav-link scrollto active" href="index.html">Trang chủ</a></li>
            <li><a class="nav-link scrollto" href="product.html">Sản phẩm</a></li>
            <li><a class="nav-link scrollto" href="project.html">Dự án</a></li>
            <li><a class="nav-link scrollto" href="member.html">Thành viên</a></li>
            <li><a class="nav-link scrollto" href="about.html">Về chúng tôi</a></li>
            <li class="dropdown">
                <a href="login.html">Thêm</a>
                </a>
                <ul>
                    <li><a href="contact.html">Liên hệ</a></li>
                    <li class="dropdown"><a href="#"><span>Mạng xã hội</span></a>
                        <ul>
                            <li><a href="https://www.facebook.com/kode.page">Facebook</a></li>
                            <li><a href="https://www.instagram.com/kode.page">Instagram</a></li>
                            <li><a href="https://www.github.com/kodestudio">GitHub</a></li>
                            <li><a href="https://www.youtube.com/channel/UCNE3g4pFx40HJrnBoHzgJ8A">YouTube</a>
                            </li>
                            <li><a href="https://www.twitter.com/kodestudio">Twitter</a></li>
                        </ul>
                    </li>
                    <li><a href="donate.html">Ủng hộ</a></li>
                    <li><a href="job.html">Việc làm</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="login.html"><img class="avatar-default" src="/assets/img/human/default-avatar.jpg" alt="" /><span class="acc">Tài khoản</span></a>
                <ul>
                    <li><a href="login.html">Đăng nhập</a></li>
                    <li><a href="register.html">Đăng ký</a></li>
                    <li><a href="update.html">Quản lý tài khoản</a></li>
                </ul>
            </li>

        </ul>
    </div>
    <i class="bi bi-list mobile-nav-toggle "></i>
</nav>
<!-- .navbar -->

</div>
        `;

var footerContent = `
    
<!-- <div class="footer-newsletter">
<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
            <h4>Nhận tin tức từ chúng tôi ngay hôm nay</h4>
        </div>
        <div class="col-lg-6">
            <form action="" method="post">
                <input type="email" name="email"><input type="submit" value="Đăng kí">
            </form>
        </div>
    </div>
</div>
</div> -->

<div class="footer-top">
<div class="container">
    <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
            <a href="index.html" class="logo d-flex align-items-center">
                <!--<img src="assets/img/logo.png" alt="">-->
                <span>Kode</span>
            </a>
            <p>Là tổ chức dành cho những bạn trẻ đam mê về công nghệ thông tin.</p>
            <div class="social-links mt-3">
                <a href="https://www.twitter.com/kodestudio" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="https://www.facebook.com/kode.page" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/kode.page" class="instagram"><i class="bi bi-instagram bx bxl-instagram"></i></a>
                <a href="https://www.github.com/kodestudio" class="github"><i class="bi bi-github bx bxl-github"></i></a>
                <a href="https://www.youtube.com/channel/UCNE3g4pFx40HJrnBoHzgJ8A" class="youtube"><i class="bi bi-youtube bx bxl-youtube"></i></a>
            </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
            <h4>Liên kết</h4>
            <ul>
                <li><i class="bi bi-chevron-right"></i> <a href="index.html">Trang chủ</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="about.html">Về chúng tôi</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="terms.html">Điều khoản và điều kiện</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="member.html">Thành viên</a></li>
            </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
            <h4>Các liên kết khác</h4>
            <ul>
                <li><i class="bi bi-chevron-right"></i> <a href="product.html">Sản phẩm</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="project.html">Dự án</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="job.html">Công việc</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="donate.html">Đóng góp</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="https://github.com/kodestudio">Cơ sở dữ liệu</a></li>
            </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Thông tin nhanh</h4>
            <p>
                <b>Địa chỉ:</b><br> Kiệt 7, <br> Thị trấn Trần Văn Thời,<br> huyện Trần Văn Thời,<br> Cà Mau, Việt Nam <br><br>
                <strong>Số điện thoại:</strong><br> +84 <br><br>
                <strong>Thư điện tử:</strong><br> contact@kodelang.dev<br>kodestudio.dev@gmail.com

            </p>

        </div>

    </div>
</div>
</div>

<div class="container">
<div class="copyright">
    &copy; Copyright <strong><span>Kode</span></strong> 2021. All Rights Reserved.
</div>
<div class="credits">
    <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexstart-bootstrap-startup-template/ -->
    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> and edit with ❤ by <a href="https://www.github.com/kodestudio">@koder</a>
</div>
</div>
`;


document.getElementById("header").innerHTML = headerContent;

document.getElementById("footer").innerHTML = footerContent;