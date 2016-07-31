'use strict';

let guid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

export default (url, data, funct, err_funct) => {
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = () => {
    if(xmlhttp.readyState == 4) {
      if(xmlhttp.status == 200) {
        if(funct != undefined) {
          funct(xmlhttp.responseText);
        }
      }
      else {
        if(err_funct != undefined) {
          err_funct(xmlhttp.status);
        }
      }
    }
  };

  xmlhttp.open('POST', url, true);
  xmlhttp.setRequestHeader("cache-control", "no-cache");
  xmlhttp.setRequestHeader("postman-token", guid());
  xmlhttp.send(data);
};
