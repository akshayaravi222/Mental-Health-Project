function showMoodDrop() {
  document.getElementById("mood").classList.toggle("show");
}

function showFeelingsDrop() {
  document.getElementById("getAlong").classList.toggle("show");
}

function showResults(option) {
  var content = document.getElementsByClassName('resolution');
  for (let i=0; i<content.length; i++) {
    content[i].style.display = "none";

  }
  document.getElementById(option).style.display = "block";
}


window.onclick = function(event) {
  if (!event.target.matches('.dropdownbutton')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
