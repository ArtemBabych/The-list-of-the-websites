// Los Angeles Lakers of the 2015-2016 NBA season.
// In the final game of that season and also his career, Kobe Bryant scored 60 points. It's something incredible.

const team = {
    _players: [
      { firstName: "Kobe", lastName: "Bryant", age: 37 },
      { firstName: "Jordan", lastName: "Clarkson", age: 24 },
      { firstName: "D'Angelo", lastName: "Russell", age: 20 },
      { firstName: "Julius", lastName: "Randle", age: 22 },
      { firstName: "Roy", lastName: "Hibbert", age: 30 },
    ],
    _games: [
      { opponent: "Utah Jazz", teamPoints: 101, opponentPoints: 96 },
      { opponent: "Oklahoma City Thunder", teamPoints: 79, opponentPoints: 112 },
      { opponent: "Houston Rockets", teamPoints: 110, opponentPoints: 130 },
      { opponent: "New Orleans Pelicans", teamPoints: 102, opponentPoints: 110 },
      { opponent: "Los Angeles Clippers", teamPoints: 81, opponentPoints: 91 },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      return this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      return this._games.push(game);
    },
    checkStats() {
      console.log('\nMembers of the Los Angeles Lakers during the 2015-2016 NBA season:\n')
      this.players.forEach(function(players){
        console.log(`Player: ${players.firstName} ${players.lastName} , Age: ${players.age}`);
      });
      console.log('\n\nThe last 10 games of those years:\n')
      this.games.forEach(function(games){
        console.log(`Opponent: ${games.opponent}, Team points: ${games.teamPoints}, Opponent points: ${games.opponentPoints}`)
      });
    },
  };
  
  const additionalPlayers = [
    { firstName: "Lou", lastName: "Williams", age: 30 },
    { firstName: "Larry", lastName: "Nance", age: 23 },
    { firstName: "Brandon", lastName: "Bass", age: 31 },
    { firstName: "Marcelo", lastName: "Huertas", age: 33 },
    { firstName: "Tarik", lastName: "Black", age: 25 },
  ];
  
  additionalPlayers.forEach(function (element) {
    return team.addPlayer(element.firstName, element.lastName, element.age);
  });
  
  const previousFiveGames = [
    { opponent: "Utah Jazz", teamPoints: 101, opponentPoints: 96 },
    { opponent: "Los Angeles Clippers", teamPoints: 81, opponentPoints: 103 },
    { opponent: "Boston Celtics", teamPoints: 100, opponentPoints: 107 },
    { opponent: "Miami Heat", teamPoints: 102, opponentPoints: 100 },
    { opponent: "Utah Jazz", teamPoints: 75, opponentPoints: 123 },
  ];
  
  previousFiveGames.forEach(function (element) {
    team.addGame(element.opponent, element.teamPoints, element.opponentPoints);
  });
  
  team.checkStats();
  