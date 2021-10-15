const App = require("./App")
// @ponicode
describe("getExercisesByMuscles", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getExercisesByMuscles()
        }
    
        expect(callFunction).not.toThrow()
    })
})
