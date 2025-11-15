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
            <input type="text" placeholder="" id="BA">
            <p>Tip percentage</p>
            <input type="text" placeholder="" id="TP">
            <button id="btn">Calculate</button>
            </div>
          
          
          `
          document.getElementById("btn").addEventListener('click',()=>{
             operation();
          })
          
}

calc.addEventListener("click", () => {
  operation();
});

con[0].addEventListener("click", (e) => {

  if (e.target.id == "recal") {
    reca();
  }

  
  
});
