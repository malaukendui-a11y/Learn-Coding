// Template Strings
const judul = "Website Bagus di 2026";
const pembuat = "Kenny";
const likes = 30;

// concatenation way
// let hasil = "Blog ini berjudul " + judul + " oleh " + pembuat + " mempunyai " + likes + " likes ";
// console.log(hasil);

// template string way
let hasil = `Blog ini berjudul ${judul} oleh ${pembuat} mempunyai ${likes} likes`;
console.log(hasil);

// creating html templates
let html = `
    <h2>${judul}</h2>
    <p>Oleh ${pembuat}</p>
    <span>Blog ini mempunyai ${likes} likes</span>
`;

console.log(html);
