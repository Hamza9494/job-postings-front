const Client = ({ user }) => {
  return (
    <div className="client">
      <h1>Client dashboard</h1>
      <h2> welcome {user.name} </h2>
    </div>
  );
};

export default Client;
