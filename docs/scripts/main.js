main();

function main() {
    
    const importObject = {

            env: {
            console_log: function(message) { console.log(message) }
            }

        };

        WebAssembly.instantiateStreaming(
            fetch("scripts/corvine-pre-alpha.wasm"), importObject
        ).then((result) => {
            const print = result.instance.exports.print;

            print("24");
        });
};