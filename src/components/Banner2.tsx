import React from 'react'

const Banner2 = () => {
  return (
    <div className="w-screen h-screen">
      <iframe id="result" srcDoc="<!DOCTYPE html>
<html lang=&quot;en&quot; >

<head>
  <meta charset=&quot;UTF-8&quot;>
  

    <link rel=&quot;apple-touch-icon&quot; type=&quot;image/png&quot; href=&quot;https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png&quot; />

    <meta name=&quot;apple-mobile-web-app-title&quot; content=&quot;CodePen&quot;>

    <link rel=&quot;shortcut icon&quot; type=&quot;image/x-icon&quot; href=&quot;https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico&quot; />

    <link rel=&quot;mask-icon&quot; type=&quot;image/x-icon&quot; href=&quot;https://cpwebassets.codepen.io/assets/favicon/logo-pin-b4b4269c16397ad2f0f7a01bcdf513a1994f4c94b8af2f191c09eb0d601762b1.svg&quot; color=&quot;#111&quot; />



  
    <script src=&quot;https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-2c7831bb44f98c1391d6a4ffda0e1fd302503391ca806e7fcc7b9b87197aec26.js&quot;></script>


  <title>CodePen - Fullpage Navigation Menu with GSAP | Greensock Animation</title>

    <link rel=&quot;canonical&quot; href=&quot;https://codepen.io/vijayshinde/pen/qBPooOq&quot;>
  
  
  
  
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Poppins', sans-serif;
    background: #ffffff;
    color: #ffffff;
}
.placeholder-title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding-left: 15vw;
    padding-right: 15vw;
}

.placeholder-title h1{
    font-size: 6vw;
    color: #333;
    font-weight: 500;
    text-align: center;
}

/* Header start */

header{
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
}

.header-row{
    padding:40px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand-logo img{
    height: 40px;
}

.menu-toggle{
    background: transparent;
    border: none;
    cursor: pointer;
}

.hamburger path{
    fill: none;
    stroke: #000;
    stroke-linecap: round;
}

.fullpage-menu{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: none;
    z-index: 10;
}
.fullpage-menu-inner{
    display: flex;
    align-items: center;
    height: 100%;
    padding: 100px 60px;
}
.menu-bg{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.menu-bg span{
    height: 33.334%;
    width: 100%;
    background: #e50914;
    display: block;
}

nav{
    position: relative;
    z-index: 10;
}

nav ul{
    list-style-type: none;
}
nav li{
    overflow: hidden;
    transition: transform 300ms ease-in-out 0s;
}
nav li + li{
    margin-top: 20px;
}
nav li a{
    font-size: 100px;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    display: inline-block;
    line-height: 1;
}
nav li:hover{
    transform: translateX(50px);
}
.header-nav-footer{
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40px 60px;
}
.social-links{
    list-style-type: none;
    display: flex;
    align-items: center;
    width: 100%;
}
.social-links li{
    font-size: 18px;
    font-weight: 500;
}
.social-links li + li{
    margin-left: 16px;
}
.social-links li:last-child{
    margin-left: auto;
}
.social-links a{
    color: #ffffff;
    text-decoration: none;
}
.video {
    width: 100%;
    height: 100%;
}

@media screen and (max-width:767px) {
    .header-row, .header-nav-footer{
        padding: 30px;
    }
    .fullpage-menu-inner{
        padding: 70px 30px;
    }
    nav li a{
        font-size: 54px;
    }
    .social-links li{
        font-size: 16px;
    }
}
</style>

  <script>
  window.console = window.console || function(t) {};
</script>

  
  
</head>

<body translate=&quot;no&quot;>
  <link href=&quot;https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&amp;display=swap&quot;
        rel=&quot;stylesheet&quot;>

<header>
        <div class=&quot;header-row&quot;>
            <div class=&quot;brand-logo&quot;>
                <a href=&quot;#&quot;>
                    <img src=&quot;logo-light.svg&quot; alt=&quot;&quot;>
                </a>
            </div>
            <button class=&quot;menu-toggle&quot; id=&quot;menuToggle&quot;>
                <svg viewBox=&quot;0 0 12 10&quot; class=&quot;hamburger&quot; height=&quot;40px&quot; width=&quot;40px&quot;>
                    <path d=&quot;M10,2 L2,2&quot; class=&quot;bar-1&quot;></path>
                    <path d=&quot;M2,5 L10,5&quot; class=&quot;bar-2&quot;></path>
                    <path d=&quot;M10,8 L2,8&quot; class=&quot;bar-3&quot;></path>

                </svg>
            </button>
        </div>
    </header>

    <section class=&quot;fullpage-menu&quot;>
        <div class=&quot;fullpage-menu-inner&quot;>
            <div class=&quot;menu-bg&quot;>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav>
                <ul class=&quot;main-menu&quot;>
                    <li><a href=&quot;about&quot; target=&quot;_parent&quot;>About Us</a></li>
                    <li><a href=&quot;#services&quot; target=&quot;_parent&quot;>Services</a></li>
                    <li><a href=&quot;#contact&quot; target=&quot;_parent&quot;>Contact Us</a></li>
                    <li><a href=&quot;projects&quot; target=&quot;_parent&quot;>All Projects</a></li>
                </ul>
            </nav>

            <div class=&quot;header-nav-footer&quot;>
                <ul class=&quot;social-links&quot;>
                    <li>&amp;copy;2024</li>
                </ul>
            </div>

        </div>
    </section>

    <section class=&quot;placeholder-title&quot;>
    <video
    autoPlay
    loop
    muted
    playsInline
    preload=&quot;auto&quot;
    class=&quot;video&quot;
    poster=&quot;/path-to-your-poster.jpg&quot;
>
    <source
        src=&quot;https://registrationexpress.in/Watermark_Animation_Videos/Wwm_Header_Animation_clip.mp4&quot;
        type=&quot;video/mp4&quot;
    />
</video>
    </section>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js'></script>
      <script id=&quot;rendered-js&quot; >
var menuToggle = document.getElementById(&quot;menuToggle&quot;);

var menuBar = gsap.timeline();

menuBar.to('.bar-1', 0.5, {
  attr: { d: &quot;M8,2 L2,8&quot; },
  x: 1,
  ease: Power2.easeInOut },
'start');

menuBar.to('.bar-2', 0.5, {
  autoAlpha: 0 },
'start');

menuBar.to('.bar-3', 0.5, {
  attr: { d: &quot;M8,8 L2,2&quot; },
  x: 1,
  ease: Power2.easeInOut },
'start');

menuBar.reverse();


var tl = gsap.timeline({ paused: true });

tl.to('.fullpage-menu', {
  duration: 0,
  display: &quot;block&quot;,
  ease: 'Expo.easeInOut' });


tl.from('.menu-bg span', {
  duration: 1,
  x: &quot;100%&quot;,
  stagger: 0.1,
  ease: 'Expo.easeInOut' });


tl.from('.main-menu li a', {
  duration: 1.5,
  y: &quot;100%&quot;,
  stagger: 0.2,
  ease: 'Expo.easeInOut' },
&quot;-=0.5&quot;);

tl.from('.social-links li', {
  duration: 1,
  y: &quot;-100%&quot;,
  opacity: 0,
  stagger: 0.1,
  ease: 'Expo.easeInOut' },
&quot;-=0.5&quot;);

tl.reverse();

menuToggle.addEventListener('click', function () {
  menuBar.reversed(!menuBar.reversed());
  tl.reversed(!tl.reversed());
});
//# sourceURL=pen.js
    </script>

  
</body>

</html>
" sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation" allow="accelerometer *; camera *; encrypted-media *; display-capture *; geolocation *; gyroscope *; microphone *; midi *; clipboard-read *; clipboard-write *; web-share *; serial *; xr-spatial-tracking *" className="result-iframe w-screen h-screen">
      </iframe>
    </div>
  )
}

export default Banner2