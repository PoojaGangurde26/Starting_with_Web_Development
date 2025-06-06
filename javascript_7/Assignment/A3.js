//what the output

const object = {
    message: "hello, words",
    logmsg() {
        console.log(this.message);
    }
};
setTimeout(object.logmsg, 1000);