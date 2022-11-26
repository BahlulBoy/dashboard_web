fetch("include/head.html")
.then(res => {
    return res.text()
})
.then(
    data => {
        document.querySelector("head").innerHTML = data;
    }
)

