import Heading from "../Heading";
import RefinancingOptimizationCard from "../RefinancingOptimizationCard";

const RefinancingOptimizationSection = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <Heading text={title} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <RefinancingOptimizationCard
          title={"SCHL"}
          value={"+ 100,000$"}
          data={[
            {
              label: "RPV:",
              value: "1.3",
            },
            {
              label: "RCD:",
              value: "0.85",
            },
            {
              label: "Amortissement",
              value: "30 années",
            },
          ]}
        />
        <RefinancingOptimizationCard
          title={"Conventionnelle"}
          value={"+ 75,000$"}
          data={[
            {
              label: "RPV:",
              value: "1.3",
            },
            {
              label: "RCD:",
              value: "0.85",
            },
            {
              label: "Amortissement",
              value: "30 années",
            },
          ]}
        />
        <RefinancingOptimizationCard
          title={"APH Select"}
          value={"+ 390,000$"}
          data={[
            {
              label: "RPV:",
              value: "1.3",
            },
            {
              label: "RCD:",
              value: "0.85",
            },
            {
              label: "Amortissement",
              value: "30 années",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default RefinancingOptimizationSection;
