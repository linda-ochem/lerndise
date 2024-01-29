import Pill from "./Pills/Pill";

const PlatformFeat = () => {
  return (
    <>
      <section className="bg-lerndis-black-pearl flex justify-center w-screen mx-auto pb-[7.4rem]">
        <div>
          <div className="flex justify-center font-medium text-base font-body pt-20 text-lerndis-blue">
            <Pill>
              Platform features
            </Pill>
          </div>
          <h1 className="text-center font-display font-bold text-lerndis-white text-[40px] pb-[74px] pt-[24px]">
            Elevating Learning Experiences <br />Through Personalization, Analytics,
            <br /> and Seamless Collaboration.
          </h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="font-body">
              <h1 className="font-extrabold not-italic text-lerndis-blue text-2xl">01.</h1>
              <h2 className="font-extrabold not-italic text-lerndis-blue text-base">
                REAL TIME LEARNING
              </h2>
              <p className="w-[18rem] font-normal text-lerndis-white not-italic text-base text-wrap">
                Algorithmically Designed Personalized Learning Paths Crafted
                From Individual Student Data.
              </p>
            </div>

            <div className="font-body">
              <h1 className="font-extrabold not-italic text-lerndis-blue text-2xl">02.</h1>
              <h2 className="font-extrabold not-italic text-lerndis-blue text-base">
                VOICE AND TEXT ASSISTANT
              </h2>
              <p className="w-[17rem] font-normal text-lerndis-white not-italic text-base text-wrap">
                Using Natural Language And Speech Recognition Technologies To
                Convert Voice Input To Text And Vice-Versa.
              </p>
            </div>
            
            <div className="font-body">
              <h1 className="font-extrabold not-italic text-lerndis-blue text-2xl">03.</h1>
              <h2 className="font-extrabold not-italic text-lerndis-blue text-base">
                MULTIPLE MODALITIES & FORMATS
              </h2>
              <p className="w-[18rem] font-normal text-lerndis-white not-italic text-base text-wrap">
                Our Platform Pioneers A Diverse Range Of Content Delivery,
                Catering To Varied Learning Preferences And Abilities.
              </p>
            </div>

            <div className="font-body">
              <h1 className="font-extrabold not-italic text-lerndis-blue text-2xl">04.</h1>
              <h2 className="font-extrabold not-italic text-lerndis-blue text-base">
                PERSONALIZED SETTINGS
              </h2>
              <p className="w-[18rem] font-normal text-lerndis-white not-italic text-base text-wrap">
                Through Personalized Accessibility Settings, Users Have The
                Flexibility To Tailor Their Experience According To Their
                Preferences And Requirements.
              </p>
            </div>

            <div className="font-body">
              <h1 className="font-extrabold not-italic text-lerndis-blue text-2xl">05.</h1>
              <h2 className="font-extrabold not-italic text-lerndis-blue text-base">
                PEER TO PEER LEARNING
              </h2>
              <p className="w-[18rem] font-normal text-lerndis-white not-italic text-base text-wrap">
                Our Platform Introduces A Dedicated Community Hub Designed To
                Enhance Collaborative Learning And Nurture Social-Emotional
                Development.
              </p>
            </div>

            <div className="font-body">
              <h1 className="font-extrabold not-italic text-lerndis-blue text-2xl">06.</h1>
              <h2 className="font-extrabold not-italic text-lerndis-blue text-base">
                COURSE CONTENT GENERATION{" "}
              </h2>
              <p className="w-[18rem] font-normal text-lerndis-white not-italic text-base text-wrap">
                Our Platform Accelerates The Content Creation Process, Allowing
                Teachers To Review And Select Resources That Align With Learning
                Objective.
              </p>
            </div>

            <div className="font-body">
              <h1 className="font-extrabold not-italic text-lerndis-blue text-2xl">07.</h1>
              <h2 className="font-extrabold not-italic text-lerndis-blue text-base">
                ADMIN TASK AUTOMATION
              </h2>
              <p className="w-[18rem] font-normal text-lerndis-white not-italic text-base text-wrap">
                This Feature Automates Administrative Processes, Including
                Attendance Tracking, Assignment Grading, And Class And Event
                Scheduling.
              </p>
            </div>

            <div className="font-body">
              <h1 className="font-extrabold not-italic text-lerndis-blue text-2xl">08.</h1>
              <h2 className="font-extrabold not-italic text-lerndis-blue text-base">
                ANALYTICS DASHBOARD
              </h2>
              <p className="w-[17.9rem] font-normal text-lerndis-white not-italic text-base text-wrap">
                The Dashboard Displays Various Metrics And Indicators That Can
                Help Administrators Understand The State & Performance Of The
                Institution.
              </p>
            </div>

            <div className="font-body">
              <h1 className="font-extrabold not-italic text-lerndis-blue text-2xl">09.</h1>
              <h2 className="font-extrabold not-italic text-lerndis-blue text-base">
                GUARDIAN CONNECT
              </h2>
              <p className="w-[17.9rem] font-normal text-lerndis-white not-italic text-base text-wrap">
                Guardian Connect Empowers Guardians To Actively Participate In
                And Stay Well-Informed About Their Wards Educational Journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlatformFeat;
