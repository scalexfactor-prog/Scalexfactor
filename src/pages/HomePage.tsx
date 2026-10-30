import { Hero, Capabilities, ProblemSolution, WhyChoose, RoiMetrics, DeliveryProcess, Industries, Testimonials, Faq, FinalCta } from '@/components/home';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Capabilities />
      <ProblemSolution />
      <WhyChoose />
      <RoiMetrics />
      <DeliveryProcess />
      <Industries />
      <Testimonials />
      <Faq />
      <FinalCta />
    </div>
  );
}
