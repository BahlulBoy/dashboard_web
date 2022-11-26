// include seperti php
fetch("include/head.html")
.then(res => {
    return res.text()
})
.then(
    data => {
        document.querySelector("head").innerHTML = data;
    }
)

fetch("include/sidebar.html")
.then(
    res => {
        return res.text()
    }
)
.then(
    data => {
        document.querySelector(".sidebar-section").innerHTML = data;
    }
)
// include seperti php
