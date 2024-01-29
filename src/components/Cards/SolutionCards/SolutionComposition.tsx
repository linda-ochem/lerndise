import SolutionCard from "./SolutionCard";

interface Props {
  selectedItem: number;
}

const SolutionComposition = ({ selectedItem }: Props) => {
  return (
    <>
      {selectedItem == 1 ? (
        <SolutionCard
          selectedItemImage={selectedItem}
          list={[
            "Personalized Learning",
            "Competence based learning with Artificial Intelligence",
            "Inclusion by design, accessibility for all",
          ]}
        >
          Harnessing state-of-the-art AI capabilities, our educational platform
          spearheads a revolutionary era of academic excellence through:
        </SolutionCard>
      ) : selectedItem == 2 ? (
        <SolutionCard
          selectedItemImage={selectedItem}
          list={[
            "Collaborative Environments",
            "Social-Emotional Learning (SEL)",
          ]}
        >
          Fostering Collaborative Learning and Holistic Development, our
          platform champions interactive educational experiences by:
        </SolutionCard>
      ) : selectedItem == 3 ? (
        <SolutionCard
          selectedItemImage={selectedItem}
          list={[
            "Streamlining and automating administrative tasks",
            "Collaboration Tools for Professional Growth",
            "Data-Driven Insights for Adaptive Teaching",
          ]}
        >
          Empowering and Developing Educators, IMO is dedicated to elevating the
          teaching profession and create an environment where educators can
          thrive personally and professionally by:
        </SolutionCard>
      ) : selectedItem == 4 ? (
        <SolutionCard selectedItemImage={selectedItem}>
          An advanced Analytics Dashboard is integrated into the LMS admin
          portal to provide comprehensive insights into institution wide
          administrative activities, allowing for data-driven decision-making,
          and strategic planning. By integrating an AI-powered LMS into the
          school infrastructure, the institution can experience improved
          operational effectiveness and financial efficiency.
        </SolutionCard>
      ) : selectedItem == 5 ? (
        <SolutionCard selectedItemImage={selectedItem}>
          The platform establishes efficient communication channels between
          guardians and teachers. Guardians will receive real-time updates on
          their ward's academic progress, achievements, and participation in
          various activities. It goes beyond traditional communication,
          guardians and teachers will work together through the platform,
          actively participating in the ward's educational journey.
        </SolutionCard>
      ) : null}
    </>
  );
};

export default SolutionComposition;
