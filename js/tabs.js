function openTab(tabName) {
  let i;
  let x = document.getElementsByClassName("tab-container");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

(function colorTab() {
  const tabsParent = document.querySelector('div.tab-menu'),
    All_tabs = document.querySelectorAll('div.tab-menu>button');
  tabsParent.onclick = ({target}) =>
  {
    if (!target.matches('div.tab-menu>button')) return

    All_tabs.forEach(tb=>tb.classList.toggle('active-tab', tb===target) )
  }
})();





/*

function colorButtonAnimation() {
  document.getElementById("Button Animation").classList.toggle('active-tab');
}
function colorButtonMixed() {
  document.getElementById("Button Mixed").classList.toggle('active-tab');
}
function colorButtonScreencast() {
  document.getElementById("Button Screencast").classList.toggle('active-tab');
}
function colorButtonSocialMedia() {
  document.getElementById("Button Social Media").classList.toggle('active-tab');
}

function openTab(evt, tabName) {
  let i, x, tabbuttons;
  x = document.getElementsByClassName("tab-row");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "flex";
  }
  tabbuttons = document.getElementsByClassName("tabbutton");
  for (i = 0; i < x.length; i++) {
    tabbuttons[i].className = tabbuttons[i].className.replace(" #d8bcbc", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " #d8bcbc";
}

*/
