import React from "react";

import RcPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";

const Pagination = props => (
  <div className="d-flex justify-content-center container-fluid shadow">
    <RcPagination
      total={props.total}
      current={props.current}
      locale={localeInfo}
      onChange={props.onChange}
      pageSize={props.pageSize}
    />
  </div>
);

export default Pagination;
