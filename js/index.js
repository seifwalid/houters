const handleHome = () => {
  const home = document.getElementById("prop1");
  const villa1 = document.getElementById("prop2");
  const villa2 = document.getElementById("prop3");
  const apartment = document.getElementById("prop4");
  home.style.display = "flex";
  apartment.style.display = "flex";
  villa1.style.display = "felx";
  villa2.style.display = "flex";
};
const handleVilla = () => {
  const home = document.getElementById("prop1");
  const villa1 = document.getElementById("prop2");
  const villa2 = document.getElementById("prop3");
  const apartment = document.getElementById("prop4");
  home.style.display = "none";
  apartment.style.display = "none";
  villa1.style.display = "flex";
  villa2.style.display = "flex";
};
const handleApartment = () => {
  const home = document.getElementById("prop1");
  const villa1 = document.getElementById("prop2");
  const villa2 = document.getElementById("prop3");
  const apartment = document.getElementById("prop4");
  home.style.display = "none";
  villa1.style.display = "none";
  villa2.style.display = "none";
  apartment.style.display = "flex";
};
