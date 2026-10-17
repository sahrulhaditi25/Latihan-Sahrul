var motoGP = [
  { circuit: 'Losail', location: 'Qatar', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } },
  { circuit: 'Autodromo', location: 'Argentine', winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' } },
  { circuit: 'De Jerez', location: 'Spain', winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' } },
  { circuit: 'Mugello', location: 'Italy', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } }
];

let grouped = {};
for (let race of motoGP) {
  let country = race.winner.country;
  if (!grouped[country]) {
    grouped[country] = { winningCircuits: [], totalWins: 0 };
  }
  grouped[country].winningCircuits.push({
    name: race.winner.firstName + ' ' + race.winner.lastName,
    winLocation: race.circuit + ', ' + race.location
  });
  grouped[country].totalWins++;
}

console.log(grouped);
