// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));



// Iteration 1 - using callbacks

getInstruction("mashedPotatoes", 0, (step) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`
  getInstruction("mashedPotatoes", 1, (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`
    getInstruction("mashedPotatoes", 2, (step) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`
      getInstruction("mashedPotatoes", 3, (step) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`
        getInstruction("mashedPotatoes", 4, (step) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`
          getInstruction("mashedPotatoes", 0, () => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Smashed potatoes are ready!</li>`
            document.getElementById("mashedPotatoesImg").style.display = "block";
          }, (error) => console.log(error))
        }, (error) => console.log(error))
      }, (error) => console.log(error))
    }, (error) => console.log(error))
  }, (error) => console.log(error))
}, (error) => console.log(error))

// Iteration 2 - using promises

function addStep(selector, step) {
  document.querySelector(`#${selector}`).innerHTML += `<li>${step}</li>`
}


obtainInstruction('steak', 0)
  .then((step) => {
    addStep('steak', step)
    return obtainInstruction('steak', 1)
  })
  .then((step) => {
    addStep('steak', step)
    return obtainInstruction('steak', 2)
  })
  .then((step) => {
    addStep('steak', step)
    return obtainInstruction('steak', 3)
  })
  .then((step) => {
    addStep('steak', step)
    return obtainInstruction('steak', 4)
  })
  .then((step) => {
    addStep('steak', step)
    return obtainInstruction('steak', 5)
  })
  .then((step) => {
    addStep('steak', step)
    return obtainInstruction('steak', 6)
  })
  .then((step) => {
    addStep('steak', step)
    return obtainInstruction('steak', 7)
  })
  .then((step) => {
    addStep('steak', step)
  })
  .then(() => {
    addStep("steak", "Steak is ready")
    document.getElementById("steakImg").style.display = "block";
  })



// Iteration 3 using async/await
async function makeBroccoli() {
  for (let i = 0; i < broccoli.length; i++) {
    await obtainInstruction('broccoli', i)
    .then((step) => {
      addStep('broccoli', step)
    })
  }
  addStep("broccoli", "Brocoli is ready")
  document.getElementById("broccoliImg").style.display = "block";

  // await obtainInstruction('broccoli', 1)
  //   .then((step) => {
  //     addStep('broccoli', step)
  //   })
  // await obtainInstruction('broccoli', 2)
  //   .then((step) => {
  //     addStep('broccoli', step)
  //   })
  // await obtainInstruction('broccoli', 3)
  //   .then((step) => {
  //     addStep('broccoli', step)
  //   })
  // await obtainInstruction('broccoli', 4)
  //   .then((step) => {
  //     addStep('broccoli', step)
  //   })
  // await obtainInstruction('broccoli', 5)
  //   .then((step) => {
  //     addStep('broccoli', step)
  //   })
  // await obtainInstruction('broccoli', 6)
  //   .then((step) => {
  //     addStep('broccoli', step)
  //   })
  //   .then(() => {
  //     addStep("broccoli", "Brocoli is ready")
  //     document.getElementById("broccoliImg").style.display = "block";
  //   })

}

makeBroccoli()

// Bonus 2 - Promise all

Promise.all()
// ...