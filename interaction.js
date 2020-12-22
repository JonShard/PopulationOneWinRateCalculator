function init() {
    document.getElementById("txt_played").value = getCookie("played")
    document.getElementById("txt_wins").value = getCookie("wins")
    document.getElementById("rng_target_win_rate").value = (getCookie("targetWinRate") * 100)
    if (getCookie("returningUser") == "true") {
        updateStats()
    }
    else {
        setCookie("consecutiveWins", 0)
        alert("We use cookies to store your games played, games won and target win rate for your convenience. By using this service you agree to cookies.")
  }
}

function getCookie(key) {
    var b = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

function setCookie(key, value) {
    document.cookie = key + "=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax";
}

function setDisplayMode(className, displayState){
  var elements = document.getElementsByClassName(className)
  for (var i = 0; i < elements.length; i++){
      elements[i].style.display = displayState;
    }
}

function updateTargetWinRateRange() {
  document.getElementById("lbl_rng_target_win_rate").innerHTML = document.getElementById("rng_target_win_rate").value
  updateStats()
}

function addWin(){
  document.getElementById("txt_played").value++
  document.getElementById("txt_wins").value++
  var consWins = getCookie("consecutiveWins")
  setCookie("consecutiveWins", +consWins + 1)
  registerMatchResult("w")
  updateStats()
}

function addLoss(){
  document.getElementById("txt_played").value++
  setCookie("consecutiveWins", 0)
  registerMatchResult("l")
  updateStats()
}

function registerMatchResult(result) {
    var history = getCookie("matchHistory")
    history = history + result + ","
    setCookie("matchHistory", history) 
}

function resetMatchHistory() {
    setCookie("matchHistory", "")
}