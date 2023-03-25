import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Toilet paper",
      amount: 56.77,
      date: new Date(2020, 12, 8),
    },
    {
      id: " e3",
      title: "TV screen",
      amount: 100.5,
      date: new Date(2011, 7, 2),
    },
    {
      id: "e4",
      title: "Art Designs",
      amount: 120.0,
      date: new Date(2050, 5, 31),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
