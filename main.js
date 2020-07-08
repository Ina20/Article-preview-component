let share = document.getElementById('share');
let shareContainer = document.getElementById('share_container');
let shareIcon = document.getElementById('svgPath');
let display = shareContainer.style.display;
display = 'none';

share.addEventListener('click', socialMedia);

function socialMedia() {
  if (display == 'none') {
    share.style.left = "230px";
    share.style.background = "hsl(214, 17%, 51%)";
    shareIcon.style.fill = "hsl(210, 46%, 95%)";
    shareContainer.style.display = 'flex';
    display = 'flex';
  }else if (display == 'flex'){
    share.style.left = "10px";
    share.style.background = "hsl(210, 46%, 95%)";
    shareIcon.style.fill = "hsl(214, 17%, 51%)";
    shareContainer.style.display = 'none';
    display = 'none';
  }
}
