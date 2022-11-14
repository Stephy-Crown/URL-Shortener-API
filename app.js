const form = document.getElementById("form");
const input = document.getElementById("input");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  // console.log(e);
  e.preventDefault();
  const url = input.value;
  shortenUrl(url);
});

async function shortenUrl(url) {
  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    // console.log(response);
    const resObj = await response.json();
    console.log(resObj);
    const data = resObj.result;
    console.log(data);

    let htmlString = "";
    htmlString += `
    <div  class="relative md:px-[300px] px-0 top-[100px] flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between md:flex p-3 rounded  md:mt-3 mt-5 font-Poppins font-semibold text-lg">
    <article>
      <h6>${data.original_link}</h6>
    </article>

    <article>

      
      <ul class="md:flex md:items-center">
        <li class="md:mr-5"><button class="text-Cyan">${data.short_link}</button></li>
        <li class=''><button class="bg-Cyan px-3 py-2 rounded-lg text-white font-bold w-[300px] md:w-[140px]" id='copy-btn'>Copy</button></li>
      </ul>
    </article>
  </div>
`;
    const newUrl = document.createElement("div");

    newUrl.classList.add("item");
    newUrl.innerHTML = htmlString;

    result.prepend(newUrl);
    const copyBtn = document.getElementById("copy-btn");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(data.short_link);
      copyBtn.textContent = "Copied!";
      copyBtn.style.backgroundColor = "hsl(257, 27%, 26%)";
    });
    input.value = "";
  } catch (error) {
    console.log(error);
  }
}
