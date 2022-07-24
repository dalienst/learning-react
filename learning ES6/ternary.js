// simplified conditional operator like if/else
// syntax: condition ? <expression if true> : <expression if false>

// Before
if (authenticated) {
    renderApp();
} else {
    renderLogin();
}

// after with ternary:
authenticated ? renderApp() : renderLogin();

