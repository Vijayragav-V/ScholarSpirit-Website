import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex flex-col h-full items-center">
        <h1 className="text-6xl font-heading mt-20 font-semibold ">
          <span className="text-orange-400">Scholar</span>
          <span className="text-blue-500">Spirit</span>
        </h1>
        <h1 className="text-text text-3xl font-heading">Foundation</h1>
      </div>
    </div>
  );
};

export default Home;