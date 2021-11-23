import { Form } from "react-bootstrap"
export default function SubHeader() {
    // const isBlog = this.state.isBlog;
    return (
      <div className=''>
        <div>
            <div class="theme-subheader">
                <div class="subhead-inner">
                    <div class="subhead-title">
                        <h2>Blog Details</h2>
                    </div>
                    <Form>
                        <div class="subhead-filters">
                            <div class="select-wrap">
                                <label>SORT BY :</label>
                                <select name="color">
                                    <option value="yellow">Recent</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                </select>
                            </div>
                            <div class="select-wrap">
                                <label class="filter-icon"><i class="fa fa-filter"></i></label>
                                <select name="color">
                                    <option value="yellow">Filters</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                </select>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
      </div>
    )
  }
  