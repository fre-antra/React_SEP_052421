const eventHelper = {
  on(ele, event, callback) {
    switch (event) {
      case "click":
        ele.addEventListener(event, callback);
        break;
      case "enter":
        ele.addEventListener("keyup", callback);
        break;
    }
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(ele, event, callback) {
    ele.removeEventListener(event, callback);
  },
};

export default eventHelper;
