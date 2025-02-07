import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the form submission function", () => {
    test("handleSubmit should be defined", () => {
        expect(handleSubmit).toBeDefined();
    });
});
