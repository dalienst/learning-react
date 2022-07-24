// JavaScript modules allow you to break up your code into separate files.

// This makes it easier to maintain the code-base.

// ES Modules rely on the import and export statements.

// inline expotation
export const name = "Jesse";

// all at one at the bottom
const age = 40;
const location = "Kenya";

export {age, location}

// Default exports
const message = () => {
    const school = "Alliance";
    const citizen = "African";
    return school + citizen;
}

export default message;
