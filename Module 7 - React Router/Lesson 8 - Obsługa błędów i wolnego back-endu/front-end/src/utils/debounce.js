export function debounce(callback, wait) {
    let timeoutId = null;

    return function (...args) {
        window.clearTimeout(timeoutId);

        timeoutId = window.setTimeout(() => {
            callback(...args);
        }, wait);
    };
}
