function init() {
    document.getElementById("txt_played").value = getCookieValue("played")
    document.getElementById("txt_wins").value = getCookieValue("wins")
    document.getElementById("rng_target_win_rate").value = (getCookieValue("targetWinRate") * 100)
    if (getCookieValue("returningUser") == "true") {
        caclulateStats()
    }
    else {
        alert("We use cookies to store your games played, games won and target win rate for your convenience. By using this service you agree to cookies.")
  }
}
function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

function setDisplayMode(className, displayState){
  var elements = document.getElementsByClassName(className)
  for (var i = 0; i < elements.length; i++){
      elements[i].style.display = displayState;
    }
}

function updateTargetWinRateRange() {
  document.getElementById("lbl_rng_target_win_rate").innerHTML = document.getElementById("rng_target_win_rate").value
  caclulateStats()
}

function addWin(){
  document.getElementById("txt_played").value++
  document.getElementById("txt_wins").value++
  caclulateStats()
}

function addLoss(){
  document.getElementById("txt_played").value++
  caclulateStats()
}