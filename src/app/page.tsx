import Header from '@/components/header/Header';
import SecInformation from '@/components/SecInformation/SecInformation';
import Footer from '@components/footer/Footer';
import MenuMb from '@components/header/components/MenuMb';
import SecIndustries from '@components/SecIndustries/SecIndustries';
import SecMap from '@components/SecMap/SecMap';
import SecParticipants from '@components/SecParticipants/SecParticipants';
import SecQuestion from '@components/SecQuestion/SecQuestion';
import SecReason from '@components/SecReason/SecReason';
import SecSlider from '@components/SecSlider/SecSlider';

export default function Home() {
  return (
    <>
      <Header />
      <SecInformation />
      <SecParticipants />
      <SecReason />
      <SecIndustries />
      <SecSlider />
      <section
        className="bg-repeat mt-[-6rem] pt-[5rem]"
        style={{ backgroundImage: "url('/images/header/bg-footer.jpeg')" }}
      >
        <SecQuestion />
        <SecMap />
        <Footer />
      </section>
		</>
	);
}

