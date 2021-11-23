import PageBanner from './page-title-banner';
import Include from './include';
import Process from './process'
import PastWork from './past-wrok'

export default function ServicesStandard() {
  return (
    <div className=''>
      <div>
        <PageBanner></PageBanner>
        <Include></Include>
        <Process isstandard="true"></Process>
        <PastWork></PastWork>
      </div>
    </div>
  )
}
