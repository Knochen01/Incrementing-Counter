let counters = document.querySelectorAll(".counter");


counters.forEach(counter => {
    counter.innerText = "0"

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target")
        const c = +counter.innerText;

        const increment = target / 200

        console.log(increment)

        if (c < target) {
            counter.innerText = `${Math.round(c + increment)}`
            setTimeout(updateCounter, 3)
        }
         else {
            counter.innerText = target
         }
    }
    updateCounter()
})


