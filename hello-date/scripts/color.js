
var colors = [
    '#B6AC90', '#EED056', '#6BA881', '#4578B7', '#AA80B2', 
  ]

function accentColor() {
    var randomColor = Math.floor(Math.random() * (colors.length));
    document.getElementById("home-hero").style.background = colors[randomColor];
  }