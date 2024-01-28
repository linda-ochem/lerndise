import Card from "./Cards/Card";
import mission from "../assets/mission.png";
import value from "../assets/value.png";

const Values = () => {
  return (
    <>
      <section className="mb-20 flex justify-between">
        <div className="bg-[#001D3D] rounded-t-2xl">
          <Card>
            <img src={mission} alt="" />
            <h2 className="font-body text-[2rem] leading-10">
              Our Mission
            </h2>
            Learndise is on a mission to revolutionize K-12 education with an
            innovative Learning Management System (LMS) powered by Artificial
            intelligence. Our Mission extends beyond merely developing another
            educational platform; we aspire to pioneer an enriched learning
            experience that ensures inclusive and equitable quality education
            for all.
          </Card>
        </div>
        <div className="bg-[#003566] rounded-t-2xl">
          <Card>
            <h2 className="font-body text-[2rem] leading-10">
              Core Value
            </h2>
            Our product addresses the needs of students, teachers, guardians,
            and school administrators, creating an ecosystem that enriches the
            entire educational journey. Students will benefit from a
            personalized and adaptive learning environment, teachers will find
            empowerment through streamlined administrative tasks and data-driven
            insights, guardians will be engaged in real-time updates, and
            administrators will gain comprehensive analytics for strategic
            decision-making.
            <img className="absolute right-0 bottom-0" src={value} alt="" />
          </Card>
        </div>
      </section>
    </>
  );
};

export default Values;
