let studentScore = [
    {
        name : 'andi',
        score : 90
    },
    {
        name : 'Rudi',
        score : 85
    },
    {
        name : 'Dira',
        score : 100
    },
]

let studentsScore = [
  { name: 'Andi', score: 90 },
  { name: 'Rudi', score: 80 },
  { name: 'Dira', score: 100 }
];

let tertinggi = studentsScore[0];
for (let s of studentsScore) {
  if (s.score > tertinggi.score) tertinggi = s;
}

console.log('Nilai tertinggi: ' + tertinggi.name + ' (' + tertinggi.score + ')');
