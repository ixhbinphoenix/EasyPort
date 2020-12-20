const NatAPI = require('nat-api');
const process = require('process');
const client = new NatAPI();

if (!process.argv[3]) {
    console.log("\neasyport <Internal Port> <External Port> <Protocol> \n\nInternal Port:\nThe Internal Port on your machine\nExternal Port:\nThe External Port you want to expose\nProtocol: \nThe Protocol you want to use. Either TCP or UDP. If not specified, it uses both");
    process.exit(1);
}
if (!Number(process.argv[2]) || !Number(process.argv[3])) {
    console.log("Invalid Port Number! Ports can only be a Number!");
    process.exit(1);
}
const internal = Number(process.argv[2]);
const external = Number(process.argv[3]);

if (internal > 65535 || external > 65535) {
    console.log("Ports cannot be higher than 65535!");
    process.exit(1);
}

if (process.argv[4] != undefined && (process.argv[4] != "UDP" || process.argv[4] != "TCP")) {
    console.log("Protocol has to be UDP or TCP. If you want to specify both, don't give this argument.");
    process.exit(1);
} else if (process.argv[4]){
    const protocol = process.argv[4];
    client.map({ publicPort: external, privatePort: internal, protocol: protocol}, function(err) {
        if (err) {
            console.log("Error trying to map port! Is UPnP enabled?");
            process.exit(1);
        }
        console.log("Port mapped!");
        process.exit(0);
    })
} else {
    client.map({ publicPort: external, privatePort: internal}, function(err){
        if (err) {
            console.log("Error trying to map port! Is UPnP enabled?");
            process.exit(1);
        }
        console.log("Port mapped!");
        process.exit(0);
    });
}