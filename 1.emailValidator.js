function emailValidator(input) {

    let email = input.shift();

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "Make Upper") {
            email = email.toUpperCase();
            console.log(email);
        } else if (input[i] === "Make Lower") {
            email = email.toLowerCase();
            console.log(email);
        } else if (input[i].includes("GetDomain")) {
            let domain = input[i].split(" ");
            let count = domain[1];
            let lastChar = email.substring(email.length - count);
            console.log(lastChar);
        } else if (input[i] === "GetUsername") {
            if (email.includes("@")) {
                let username = email.split("@")[0];
                console.log(username);
            } else {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            }
        } else if (input[i].includes("Replace")) {
            let replace = input[i].split(" ");
            let change = replace[1];
            email = email.replace(new RegExp(change, 'g'), "-");
            console.log(email);
        } else if (input[i] === "Encrypt") {
            let asciiValues = [];
            for (let j = 0; j < email.length; j++) {
                const asciiValue = email.charCodeAt(j);
                asciiValues.push(asciiValue);
            }
            console.log(asciiValues.join(" "));
        } else if (input[i] === "Complete"){
            break;
        }
    }

}
emailValidator(["Another@Mail.com",
"Make Lower",
"GetUsername",
"GetDomain 3",
"Encrypt",
"Complete"])

