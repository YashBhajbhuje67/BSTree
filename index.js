
const convertRawData = (rawDataFromInput) => {
  let data = [], num = "";

  for (let i = 0; i < rawDataFromInput.length; i++) {
    if (rawDataFromInput[i] == ',') {
      if (num !== "") { data.push(+num); num = ""; }
    }
    else { num += rawDataFromInput[i]; }
  }
  if (num.length) { data.push(+num); }

  return data;
}

const enterDataInHtml = (data) => {
  
  let position = window.innerWidth/2;
  document.getElementById("display").innerHTML = data.map((eachnode, i) => {
    if (i == 0) {
      return (`<div class="eachNode" style="left:${position}px"> ${eachnode} </div>`);
    }
    else if (data[i - 1] > data[i]) {
      position -= 50;
      return (`<div class="eachNode" style="top:${i * 50}px; left:${position}px"> ${eachnode} </div>`);
    }
    else {
      position += 50;
      return (`<div class="eachNode" style="top:${i * 50}px; left:${position}px"> ${eachnode} </div>`);
    }
  }).join('')

}

const getData = () => {
  let rawDataFromInput = document.getElementById("bstInput").value;
  let data = convertRawData(rawDataFromInput);

  enterDataInHtml(data);
}