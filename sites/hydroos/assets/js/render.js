var headerContent = `


<div class="topnav nav-gradient" id="myTopnav">
  <a href="#home" class="active"><i class="fas fa-home"></i>  Trang chủ</a>
  <a href="#news"><i class="fab fa-blogger-b"></i>  Blog</a>
  <a href="https://fb.com/leminhtri.dev"><i class="far fa-address-book"></i>  Liên hệ</a>
  <a href="https://kodelang.dev"><i class="fas fa-globe-asia"></i>  Tổ chức Kode</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

`;

var footerContent = `
  
<div class="topnav nav-gradient fixed-bottom" id="myTopnav">
<div class="hydro" style="float:left">
<span>Hydro Team</span>
</div>

<div style="float: right">
<a href="#"><i class="fab fa-facebook"></i></a>
</>
</div>

`;

var ball = `
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
`;

document.getElementById("header").innerHTML = headerContent;

document.getElementById("footer").innerHTML = footerContent;

document.getElementById("particle-container").innerHTML = ball;
