import PageBanner from './page-title-banner';
import Include from './include';
import Process from './process'
import PastWork from './past-wrok'
import Comparison from './comparison'
import GetInTouch from './get-in-touch'

export default function ServicesStandard() {
  return (
    <div className=''>
      <div>
        <PageBanner></PageBanner>
        <Include></Include>
        <Comparison></Comparison>
        <Process isvirtual="true"></Process>
        <GetInTouch></GetInTouch>
        <PastWork></PastWork>
      </div>
    </div>
  )
}
