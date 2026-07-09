import Card from "../ui/Card";

const StaffDeployment = ({ analysis }) => {
  const staff = [
    ["Security", analysis?.securityRisk ?? "Unavailable"],
    ["Medical", analysis?.medicalRisk ?? "Unavailable"],
    ["Weather", analysis?.weatherRisk ?? "Unavailable"],
    ["Route", analysis?.route ?? "Unavailable"],
  ];

  return (
    <Card>

      <h2 className="text-xl font-bold text-white">
        Staff Deployment
      </h2>

      <div className="mt-6 space-y-5">

        {staff.map(([name, count]) => (

          <div
            key={name}
            className="flex justify-between"
          >

            <span>{name}</span>

            <strong>{count}</strong>

          </div>

        ))}

      </div>

    </Card>

  );

};

export default StaffDeployment;