
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
  document.getElementById("display").innerHTML = data.map((eachnode, index) => {
    if (index == 0) {
      return (`<div class="eachNode" style="left:${position}px"> ${eachnode} </div>`);
    }
    else if (data[index - 1] > data[index]) {
      position -= 80;
      return (`<div class="eachNode" style="top:${index * 60}px; left:${position}px"> ${eachnode} </div>
      <svg height='55' width='${window.innerWidth-10}'><line x1='${position+70}' y1='40' x2='${position-10}' y2='100' stroke='black'/></svg>`);
    }
    else {
      position += 80;
      return (`<div class="eachNode" style="top:${index * 60}px; left:${position}px"> ${eachnode} </div>
      <svg height='60' width='${window.innerWidth-10}'><line x1='${position-40}' y1='45' x2='${position+40}' y2='105' stroke='black'/></svg>`);
    }
  }).join('')

}

const getData = () => {
  let rawDataFromInput = document.getElementById("bstInput").value;
  let data = convertRawData(rawDataFromInput);

  enterDataInHtml(data);
}