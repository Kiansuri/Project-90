function addUser()
{
     player1_name = document.getElementById("player1_name_input").innerHTML
     player2__name = document.getElementById("player2__name_input").innerHTML


        localStorage.setItem("player1 name is" + player1_name)
        localStorage.setItem("player 2 name is" + player2__name)

        window.location = "game_page.html";
}

