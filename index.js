(function () {
    let b = document.createElement("script"); b.type = "text/javascript"; b.async = true; b.src = "https://unpkg.com/qr-code-styling@1.5.0/lib/qr-code-styling.js";
    let head = document.getElementsByTagName("head")[0];
    head.insertBefore(b, head.children[1]);

    const image = "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg";

    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(json => console.log(json));

    setTimeout(() => {
        let a = document.createElement("script"); a.type = "text/javascript";
        const s = document.createTextNode(`const qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            type: "svg",
            data: "https://www.facebook.com/",
            image: "${image}",
            dotsOptions: {
                color: "#4267b2",
                type: "rounded"
            },
            backgroundOptions: {
                color: "#e9ebee",
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 20
            }
        });
        qrCode.append(document.getElementById("canvas"));`);
        a.appendChild(s);
        let c = document.getElementsByTagName("body")[0];
        c.appendChild(a);
    }, 500); 
})();