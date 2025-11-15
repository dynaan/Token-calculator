const calc = document.getElementById("btn");
const con = document.getElementsByClassName("content");
const BA = document.getElementById("BA");
const TP = document.getElementById("TP");


function operation() {

  const BAV = BA.value;
  const TPV = TP.value;

   const res = BAV * (TPV / 100);

  con[0].innerHTML = `
       
       <h2 id="re">RESULT:</h2>
       <div id="reflect">
        
         <h3 id="cong">Congratulations you got this much discount : ${res} RS </h3>
         <button id="recal">RECALCULATE</button>
       </div>
       
       
      `;
}

function reca() {
  con[0].innerHTML = `
             <div class="innerP">
            <p>Enter the bill amount nd tip percentage to calculate the total.</p>
            <p>Bill amount</p>
            <input type="text" placeholder="" id="BAA">
            <p>Tip percentage</p>
            <input type="text" placeholder="" id="TPP">
            <button id="btn">Calculate</button>
            </div>
          
          
          `;
  document.getElementById("btn").addEventListener("click", () => {
    const BAV = BAA.value;
    const TPV = TPP.value;

    const res = BAV * (TPV / 100);

    con[0].innerHTML = `
       
       <h2 id="re">RESULT:</h2>
       <div id="reflect">
        
         <h3 id="cong">Congratulations you got this much discount : ${res} RS </h3>
         <button id="recal">RECALCULATE</button>
       </div>
       
       
      `;
  });
}

calc.addEventListener("click", () => {
  
    if(TP.value === "" && BA.value === "") {
      document.getElementById("para").innerText="Please Enter the Bill Amount and Tip Percentage";
    }
    else if(BA.value === "") {
     document.getElementById("para").innerText="Please Enter the Bill Amount";
    }
    else if(TP.value === "") {
      document.getElementById("para").innerText="Please Enter the Tip Percentage";
    }
    else {
      operation();
    }
});

con[0].addEventListener("click", (e) => {
  if (e.target.id == "recal") {
    reca();
  }
});
