
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
  var position = 50;
  document.getElementById("display").innerHTML = data.map((eachnode, i) => {
    if (i == 0) {
      return (`<div class="eachNode" style="left:50%"> ${eachnode} </div>`);
    }
    else if (data[i - 1] > data[i]) {
      position -= 5;
      return (`<div class="eachNode" style="top:${i * 50}px; left:${position}%"> ${eachnode} </div>
      <svg><line x1="${position + 5}" y1="${(i-1)*50}" x2="${position}" y2="${i*50}" style:"stroke:rgb(0,0,0); stroke-width:2"/></svg>`);
    }
    else {
      position += 5;
      return (`<div class="eachNode" style="top:${i * 50}px; left:${position}%"> ${eachnode} </div>
      <svg><line x1="${position - 5}" y1="${(i-1)*50}" x2="${position}" y2="${i*50}" style:"stroke:rgb(0,0,0); stroke-width:2"/></svg>`);
    }
  }).join('')

}

const getData = () => {
  var rawDataFromInput = document.getElementById("bstInput").value;
  let data = convertRawData(rawDataFromInput);

  enterDataInHtml(data);
}