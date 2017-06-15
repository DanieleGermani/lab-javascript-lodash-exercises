var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];

employeeSatisfaction = function() {
  return _.sample(opinions);
};

function pushTenRandomPosition() {
  return _.times(10, employeeSatisfaction);
}

var result = function pushFiveRandomPosition() {
  return _.times(5, pushTenRandomPosition);
};

console.log(result());
