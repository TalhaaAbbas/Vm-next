import HelpServiceListing from './help-services-listing'
import HelpServiceDetail from './help-services-detail'
export default function HelpCenterDetail() {
  return (
    <div className="">
        <div class="help-detail-wrap">
            <div class="help-detail-inner">
                <div class="row">
                    <HelpServiceListing></HelpServiceListing>
                    <HelpServiceDetail></HelpServiceDetail>
                </div>
            </div>
        </div>
    </div>
  )
}

