const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
    // .split will split the text from the label into an array of size (length of string), which is 5 for the Email field.
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    // .map works on arrays, will create a span around each letter in the array
    // idx * 50 makes it such that idx 0 = 0, idx 1 = 50, idx 2 = 100, etc. Grouped with ms, changes the speed of each letter in the index. Creating the wave effect
        .join('')
    // .join turns this array into a string
})