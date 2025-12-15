const urlFake = "pop.html";
let counterUrl = 0;
let cookies = false;

const cookiesJs = document.getElementsByClassName('cookies-accept');

function popOops (){
    counterUrl++;
    if (counterUrl<6) {
        console.log(counterUrl);
        window.open(urlFake, '_blank');
    }
    if (counterUrl === 5) {
        cookies = true;
        if (cookies) {
            cookiesJs[0].style.display = 'block';
        }
    }
}

document.addEventListener('click', popOops);

const closesCheckbox = document.getElementById('closes');

closesCheckbox.addEventListener('change', () => {
    if (closesCheckbox.checked) {
        cookiesJs[0].style.display = 'none';
    }
});

const containerCondition = document.getElementsByClassName('terms-condition-container');
const activeTermsDisplay = document.getElementsByClassName('terms-accept');

activeTermsDisplay[0].addEventListener('click', () => {
    containerCondition[0].style.display = 'block';
});



const closeTerms = document.getElementById('accept-con');
let conditions = false;

closeTerms.addEventListener('change', () => {
    if(closeTerms.checked) {
        containerCondition[0].style.display = 'none';
        conditions = true;
    }
});

const followConstruction = document.getElementById('follow-construction');
const constructionPage = "construction.html";

followConstruction.addEventListener('click', () => {
    if (conditions === true) {
        window.location.href = constructionPage;
    }
    else{
        alert("ACEPTA LOS TERMINOS")
    }
});

