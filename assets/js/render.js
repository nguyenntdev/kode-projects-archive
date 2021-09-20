var headerContent = `


<div class="topnav nav-gradient" id="myTopnav">
<a class="navbar-brand brand" href="#">
    <img src="/kode-reborn/assets/img/logo-kode.png" width="30" height="30" class="d-inline-block align-top brand-image" alt="">
    Kode Archive
  </a>  <a href="#home" ><i class="fas fa-home"></i>  Homepage</a>
  <a href="https://kodelang.dev"><i class="fas fa-globe-asia"></i>  Main website</a>
  <a href="https://kodelang.dev/kode-mini-tools" ><i class="fas fa-tools"></i>  Kode Mini Tools</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

`;

var footerContent = `
  
<div class="topnav nav-gradient fixed-bottom" id="myTopnav">
<div class="hydro" style="float:left">
<span>&copy;<strong><span>Kode</span></strong> 2021.</span>
</div>

<div style="float: right">
<a href="https://fb.com/kode.page"><i class="fab fa-facebook"></i></a>
<a href="https://www.youtube.com/channel/UCNE3g4pFx40HJrnBoHzgJ8A"><i class="fab fa-youtube-square"></i></a>
<a href="https://github.com/kodestudio"><i class="fab fa-github-square"></i></a>
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
