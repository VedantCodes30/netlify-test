const MAX_PRIME = 1000000;

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
    const primes = [];
    while (primes.length < quota) {
        const candidate = random(MAX_PRIME);
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }
    return primes;
}

const quotaInput = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
    const primes = generatePrimes(quotaInput.value);
    output.textContent = `Finished generating ${quotaInput.value} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
    document.location.reload();
});
