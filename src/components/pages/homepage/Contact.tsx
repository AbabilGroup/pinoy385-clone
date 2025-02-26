import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-10">
      <div className="container space-y-5">
        <h2 className="text-center text-4xl font-bold">Contact us.</h2>
        <div className="flex items-center justify-center">
          <Button className="rounded-full bg-primary-pi px-10 py-8 shadow-none hover:bg-[#7A7A7A]">
            SEND AN INQUIRY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
