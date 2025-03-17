document.getElementById("anagramForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const string1 = document.getElementById("string1").value;
    const string2 = document.getElementById("string2").value;
    const result = areAnagrams(string1, string2);
    const resultElement = document.getElementById("result");
    if (result) {
        resultElement.textContent = `"${string1}" and "${string2}" are anagrams!`;
        resultElement.style.color = "#28a745";
    } else {
        resultElement.textContent = `"${string1}" and "${string2}" are not anagrams.`;
        resultElement.style.color = "#dc3545";
    }
});
function areAnagrams(str1, str2) {
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}