// Text and range numbers can be altered from here
const CONFIG = {
    min: 1,
    max:   100,
    multipleOfText1: "SCHEELS",
    multipleOfText2: ".COM"
  };
  
  // HTML references
  const runBtn   = document.getElementById("runBtn");
  const resetBtn = document.getElementById("resetBtn");
  const output   = document.getElementById("output");
  
  // "Run" button logic
  runBtn.addEventListener("click", () => {
    runBtn.disabled = true;
    resetBtn.disabled = false;
  
    for (let i = CONFIG.min; i <= CONFIG.max; i++) 
    {
      // define line as an empty string
      let line = "";
  
      // if the given number is a multiple of 3, append the 'multipleOfText1' string
      if (i % 3 === 0) 
      {
        line += CONFIG.multipleOfText1;
      }
        
      // if the given number is a multiple of 5, append the 'multipleOfText2' string
      if (i % 5 === 0) 
      {
        line += CONFIG.multipleOfText2;
      }
        
      // if line is still empty, that means it is not a multiple of 3 or 5. Return the given number
      if (line === "") 
      {
        line += i;
      }
 
      // add number to output
      const div = document.createElement("div");
      div.textContent = line;
      output.appendChild(div);
    }
  });
  
  // "Reset" button logic
  resetBtn.addEventListener("click", () => {
    output.innerHTML   = "";
    runBtn.disabled    = false;
    resetBtn.disabled  = true;
  });
  
  // Initial set "reset button" to disabled
  resetBtn.disabled = true;
  