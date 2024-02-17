import React from "react";


function InlineOne() {
  return (
    <div>
      {/* this leads to css conflicts as error is applied from parent to every child component */}
      <h1 className="error">InlineOne Error</h1>

      {/* below styles can not be used from parent component using module css. So there is no CSS conflicts here */}
      {/* <h1 className={styles.success}>Success</h1> */}

    </div>
  );
}

export default InlineOne;
