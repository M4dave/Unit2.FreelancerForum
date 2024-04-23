const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 },
];

let averagePrice = calculateAveragePrice(freelancers);

const addFreelancerIntervalId = setInterval(
  addFreelancerAndUpdateAverage,
  1000
);

render();

function render() {
  const freelancersList = document.querySelector("#freelancersList");
  const freelancerElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.textContent = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.price}`;
    return element;
  });
  freelancersList.replaceChildren(...freelancerElements);

  const averagePriceElement = document.querySelector("#averagePrice");
  averagePriceElement.textContent = `The average starting price is $${averagePrice.toFixed(
    2
  )}`;
}

function addFreelancerAndUpdateAverage() {
  const newFreelancer = [
    { name: "Dr. Elijah", price: 25, occupation: "Accountant" },
    { name: "Dr. Abraham", price: 51, occupation: "Barber" },
    { name: "Prof. Caleb", price: 43, occupation: "Chef" },
    { name: "Prof. Ezekiel", price: 81, occupation: "Doctor " },
    { name: "Dr. Delilah", price: 43, occupation: "Electrician" },
    { name: "Prof. Felix", price: 76, occupation: "Farmer" },
    { name: "Dr. Isaiah", price: 47, occupation: "Graphic Designer" },
    { name: "Prof. John", price: 72, occupation: "Lawyer" },
  ];
  const size = newFreelancer.length;
  const randomNumber = Math.floor(Math.random() * size);
  freelancers.push(newFreelancer[randomNumber]);

  averagePrice = calculateAveragePrice(freelancers).toFixed(2);

  render();
}

function calculateAveragePrice(freelancers) {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return total / freelancers.length;
}
