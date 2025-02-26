const Achievements = () => {
  return (
    <section className="bg-[#EFF1F3] py-20">
      <div className="container grid grid-cols-1 justify-center divide-y-[1px] divide-black lg:grid-cols-4 lg:divide-x-[1px] lg:divide-y-0">
        <div className="basis-1/2 space-y-3 p-20 text-center">
          <p className="text-lg font-semibold">
            EMPLOYED <br /> WORKERS
          </p>
          <h2 className="text-5xl">8.000+</h2>
        </div>
        <div className="basis-1/2 space-y-3 p-20 text-center">
          <p className="text-lg font-semibold">
            NUMBER OF <br /> CLIENTS
          </p>
          <h2 className="text-5xl">300+</h2>
        </div>
        <div className="basis-1/2 space-y-3 p-20 text-center">
          <p className="text-lg font-semibold">
            CANDIDATES IN <br /> THE DATABASE
          </p>
          <h2 className="text-5xl">15.000+</h2>
        </div>
        <div className="basis-1/2 space-y-3 p-20 text-center">
          <p className="text-lg font-semibold">
            YEARS ON <br /> THE MARKET
          </p>
          <h2 className="text-5xl">6+</h2>
        </div>
      </div>

      <div className="container">
        <p className="mx-auto max-w-[760px] text-center text-lg font-light lg:mt-20">
          Due to our experience, we offer clients a comprehensive service to
          complete all steps in the process of hiring Filipino workers. Our
          expert teams carry out the entire selection and recruitment process
          according to your needs.
        </p>
      </div>
    </section>
  );
};

export default Achievements;
