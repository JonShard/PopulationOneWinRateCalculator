
function getWinsToReachTarget(gamesPlayed, gamesWon, targetWinRate) {
    var hypPlayed = gamesPlayed
    var hypWon = gamesWon
    while((hypWon / hypPlayed) < targetWinRate) {
        hypWon++
        hypPlayed++
    }
    return (hypPlayed - gamesPlayed)
}

    function caclulateStats() {
    var gamesPlayed = document.getElementById("txt_played").value
    var gamesWon = document.getElementById("txt_wins").value
    var targetWinRate = document.getElementById("rng_target_win_rate").value / 100
    document.cookie = "played=" + gamesPlayed + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.cookie = "wins=" + gamesWon + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.cookie = "targetWinRate=" + targetWinRate + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.cookie = "returningUser=" + true + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";

    document.getElementById("lbl_games_played").innerHTML = "Games played: " + gamesPlayed
    document.getElementById("lbl_games_won").innerHTML = "Games won: " + gamesWon
    document.getElementById("lbl_games_lost").innerHTML = "Games lost: " + (gamesPlayed - gamesWon)
    document.getElementById("lbl_consecutive_wins").innerHTML = "Consecutive wins: " + getCookieValue("consecutiveWins");
    document.getElementById("lbl_wins_at_stake").innerHTML = "Wins at stake: " + (getWinsToReachTarget(+gamesPlayed + 1, gamesWon, targetWinRate) - getWinsToReachTarget(gamesPlayed, gamesWon, targetWinRate))
    document.getElementById("lbl_win_rate").innerHTML = "Win rate: " + ((gamesWon / gamesPlayed) * 100).toFixed(3) + "%"
    document.getElementById("lbl_rounded_win_rate").innerHTML = "Population One rounded win rate: " + ((gamesWon / gamesPlayed).toFixed(2) * 100) + "%"
    document.getElementById("lbl_games_to_target").innerHTML = "Consecutive games to reach goal: " + (getWinsToReachTarget(gamesPlayed, gamesWon, targetWinRate))
    setDisplayMode("stats", "block")
}

// function registerMatchResult(result) {
//     var history = getCookieValue("matchHistory")
//     history += result + ","
//     document.cookie = "matchHistory=" + history + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";   
// }