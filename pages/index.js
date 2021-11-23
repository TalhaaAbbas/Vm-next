import Banner from './main-banner';
import Services from './services';
import Process from './process';
import WhyVm from './why-vm';
import Partners from './partners';
import Testimonials from './testimonials';

export default function Home(){



  return (
    <div className=''>
      <div>
      <Banner></Banner>
      <Services></Services>
      <Process ishome={true}></Process>
      <WhyVm></WhyVm>
      <Partners></Partners>
      <Testimonials></Testimonials>
      </div>
    </div>
  )
}
// const ishome = props.ishome;
// <HomeProcess ishome= {true}/>
