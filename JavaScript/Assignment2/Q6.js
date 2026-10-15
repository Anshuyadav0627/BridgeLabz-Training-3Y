let count = 0;

function increment() {
    count++;
    console.log(`Count: ${count}`);
}

function decrement() {
    count--;
    console.log(`Count: ${count}`);
}

function showCounter() {
    function displayCount() {
        console.log(`Current Count: ${count}`);
    }

    displayCount();
}

increment();
increment();
decrement();
showCounter();