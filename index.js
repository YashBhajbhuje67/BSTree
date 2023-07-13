
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

  document.getElementById("display").innerHTML = data.map((eachnode, i) => {
    if (i == 0) {
      return (`<div class="eachNode">${eachnode} for 0</div>`)
    }
    else if (data[i - 1] > data[i]) {
      return (`<div class="eachNode" style="">${eachnode} for left</div>`)
    }
    else {
      return (`<div class="eachNode" style="">${eachnode} for right</div>`)
    }
  }).join('')

}

const getData = () => {
  var rawDataFromInput = document.getElementById("bstInput").value;
  let data = convertRawData(rawDataFromInput);

  enterDataInHtml(data);
}