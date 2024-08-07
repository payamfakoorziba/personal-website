import { Container } from "@/components/container";

const GetInTouch = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 dark:bg-gradient-to-t from-[#303036] -z-10" />
      <Container className="py-10">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">
            Want to get in touch?
          </h3>
          <p className="text-sm/relaxed md:text-base/relaxed mt-5 leading-relaxed">
            Drop me a line at info@payamfakoorziba.com.
            <br />
            If you ever come to Toronto, let&apos;s meet up for coffee.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default GetInTouch;
