const Freelancer = ({ user }) => {
  return (
    <div className="freelancer">
      <h1>freelancer</h1>
      <h2> welcome {user.name} </h2>
      <h2> {user.type} </h2>
    </div>
  );
};

export default Freelancer;
