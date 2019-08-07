// This is some test code to demonstrate coverage differences 
// in istanbul reports when running via Jest and running with translated v8 coverage

let thing = "This is outside the function scope"

/**
 * 
 * This is a function that does no useful work
 * 
 * @param {*} param1 Some value
 * @param {*} param2  Another value
 * 
 * @returns The first value
 */
export function testA(param1, param2) {
  let otherThing = "This is inside the function scope"

  if (param2) {
    console.log("param2 is truthy")

    if (param1 && param2) {
      console.log("both are truthy!")
      console.log(otherThing)
    }
  }

  console.log(param1)

  return param1
}

/**
 * This is a function we are not going to call
 * 
 *  @returns A nonsense value
 */
export function testB() {
  let unused = 1
  let alsoUnused = 2

  return unused + alsoUnused
}

// Let's add some whitespace at the end too:








