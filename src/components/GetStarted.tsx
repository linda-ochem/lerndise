import Button from "./Button";


const GetStarted = () => {
  return (
    <>
      <section className="flex gap-x-2">
        <div>
          <Button width={19.3} padding={2}>
            Empower Students, Inspire Educators
          </Button>
          <h1 className="text-4xl">
            Unlock Limitless <br /> Learning Possibilities
          </h1>
          <p className="w-[26rem]">
            Welcome to Learndise, where innovation meets education! Our
            AI-driven Learning Management System (LMS) is revolutionizing
            the way students learn and educators teach. Seamlessly
            combining cutting-edge technology with a user- friendly {" "}
            interface, we create an immersive educational experience tailored to
            individual needs.
          </p>
          <Button width={10.75} padding={3}>
            Get Started
          </Button>
        </div>
      
      </section>
    </>
  );
};

export default GetStarted;
