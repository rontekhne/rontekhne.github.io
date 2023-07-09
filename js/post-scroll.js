function addScrollBtn()
{
    btn = 
    `
    <a href="#" onclick="scrollToTop()" id="scrollBtn">
        <img class="scroll-btn" src="./../../../img/scroll_btn.png" width="50" height="50" alt="Scroll Button">
    </a>
    `;

    document.write(btn);
}

addScrollBtn();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = "block";
      scrollBtn.style.opacity = "1";
    } else {
      scrollBtn.style.opacity = "0";
      setTimeout(function() {
        scrollBtn.style.display = "none";
      }, 500);
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }