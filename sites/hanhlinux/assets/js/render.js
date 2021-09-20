var headerContent = `
<div class="topnav fixed-top" id="myTopnav">
<div style="padding-left: 1em;">
    <img src="assets/img/logo.svg" class="navbar-brand"
</div>
<a href="index.html"><i class="ri-home-2-line"></i> Home</a>
<a href="https://github.com/hanhlinux/hanhlinux/wiki"
  ><i class="ri-book-open-fill"></i> Wiki</a
>
<a href="https://www.facebook.com/conuxnightcore"><i class="ri-contacts-book-2-fill"></i> Contact</a>
<a href="https://osdn.net/projects/hanhlinuxiso/"
  ><i class="ri-download-2-fill"></i> Download</a
>

<a href="javascript:void(0);" class="icon" onclick="myFunction()">
  <i class="ri-bar-chart-horizontal-fill"></i>
</a>
</div>
        `;

var footerContent = `

<div class="topnav fixed-bottom text-center" id="myTopnav">

<a href="index.html" class="footer-link text-center"><i class="ri-copyright-fill"></i>  Hanh Linux 2021</a>

<div style="float: right">
<a href="https://github.com/hanhlinux"
  ><i class="ri-github-fill"></i></a
>
<a href="https://discord.com/invite/ba8weSjQnF"><i class="ri-discord-fill"></i>
  </a>
  <a href="  https://www.facebook.com/conuxnightcore
  "><i class="ri-facebook-box-fill"></i></a>

</div>
</div>
    
`;

document.getElementById("header").innerHTML = headerContent;

document.getElementById("footer").innerHTML = footerContent;
