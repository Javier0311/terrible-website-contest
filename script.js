const urlFake = "pop.html";
let counterUrl = 0;
let cookies = false;

const cookiesJs = document.getElementsByClassName('cookies-accept');

// Pops Section
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

//  Cookies Section

let addsCrazy = false;
const closesCheckbox = document.getElementById('closes');
const openAdds = document.getElementsByClassName('open');

const bodyCss = document.querySelector('body');
const containerMain = document.getElementsByClassName('container-main')

closesCheckbox.addEventListener('change', () => {
    if (closesCheckbox.checked) {
        cookiesJs[0].style.display = 'none';
        addsCrazy = true;

// Crazy Ads 

        if (addsCrazy===true) {
            for (let i = 0; i < openAdds.length; i++) {
                openAdds[i].style.display = 'flex';
            }
// Background change
            bodyCss.style.backgroundColor = 'red';
            containerMain[0].style.backgroundColor = 'black';
        }
    }
});

// Terms & Conditions Section

const containerCondition = document.getElementsByClassName('terms-condition-container');
const activeTermsDisplay = document.getElementsByClassName('terms-accept');

activeTermsDisplay[0].addEventListener('click', () => {
    containerCondition[0].style.display = 'block';
});

const allTerms = document.querySelector('.all-terms');
const closeTerms = document.getElementById('accept-con');
let conditions = false;

allTerms.addEventListener('scroll', () => {
    if (allTerms.scrollTop + allTerms.clientHeight >= allTerms.scrollHeight - 1){
        closeTerms.disabled = false;
    }
});

closeTerms.addEventListener('change', () => {
    if(closeTerms.checked) {
        containerCondition[0].style.display = 'none';
        conditions = true;
    }
});

//  Pop Construction.html

const followConstruction = document.getElementById('follow-construction');
const constructionPage = "construction.html";

followConstruction.addEventListener('click', () => {
    if (conditions === true) {
        window.location.href = constructionPage;
    }
    else{
        alert("ACCEPT TERMS")
    }
});

