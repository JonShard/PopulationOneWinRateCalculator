
function getWinsToReachTarget(gamesPlayed, gamesWon, targetWinRate) {
    var hypPlayed = gamesPlayed
    var hypWon = gamesWon
    while((hypWon / hypPlayed) < targetWinRate) {
        hypWon++
        hypPlayed++
    }
    return (hypPlayed - gamesPlayed)
}

function updateStats() {
    var gamesPlayed = document.getElementById("txt_played").value
    var gamesWon = document.getElementById("txt_wins").value
    var targetWinRate = document.getElementById("rng_target_win_rate").value / 100
    setCookie("played", gamesPlayed)
    setCookie("wins", gamesWon)
    setCookie("targetWinRate", targetWinRate)
    setCookie("returningUser", true)

    document.getElementById("lbl_games_played").innerHTML = "Games played: " + gamesPlayed
    document.getElementById("lbl_games_won").innerHTML = "Games won: " + gamesWon
    document.getElementById("lbl_games_lost").innerHTML = "Games lost: " + (gamesPlayed - gamesWon)
    document.getElementById("lbl_consecutive_wins").innerHTML = "Consecutive wins: " + getCookie("consecutiveWins");
    document.getElementById("lbl_wins_at_stake").innerHTML = "Wins at stake: " + (getWinsToReachTarget(+gamesPlayed + 1, gamesWon, targetWinRate) - getWinsToReachTarget(gamesPlayed, gamesWon, targetWinRate))
    document.getElementById("lbl_win_rate").innerHTML = "Win rate: " + ((gamesWon / gamesPlayed) * 100).toFixed(3) + "%"
    document.getElementById("lbl_rounded_win_rate").innerHTML = "Population One rounded win rate: " + ((gamesWon / gamesPlayed).toFixed(2) * 100) + "%"
    document.getElementById("lbl_games_to_target").innerHTML = "Consecutive games to reach goal: " + (getWinsToReachTarget(gamesPlayed, gamesWon, targetWinRate))
    setDisplayMode("stats", "block")
    tableCreate()
}

// https://stackoverflow.com/questions/14643617/create-table-using-javascript
// function tableCreate(){
//     var parent = document.getElementById("historySection");
//     // parent.removeChild(0)
//     tbl  = document.createElement('table');
//     tbl.style.width  = '100px';
//     tbl.style.border = '1px solid black';
//     var tr = tbl.insertRow();
//     for(var j = 0; j < 2; j++){
//         var td = tr.insertCell();
//         td.appendChild(document.createTextNode('Cell'));
//         td.style.border = '1px solid black';
//     }
//     parent.appendChild(table);
// }