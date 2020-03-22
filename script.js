const FirstName = document.getElementById("FirstName")
const SecondName = document.getElementById("SecondName")
const lettersRegex = /^[A-Z][a-zA-Z]+(([',. -][A-Z][a-zA-Z ])?[a-zA-Z]*)*$/
const RadioList = document.getElementsByName("gender")
const banner = document.getElementById("banner")
const bannerName = document.getElementById("bannerName")
const comments = document.getElementById("comments")

function inputValidation() {

    const firstNameMatches = FirstName.value.match(lettersRegex)
    if (firstNameMatches) {
        FirstName.style.borderColor = ("blue")
    } else {
        FirstName.style.borderColor = ("red")
    }

    const secondNameMatches = SecondName.value.match(lettersRegex)
    if (secondNameMatches) {
        SecondName.style.borderColor = ("blue")
    } else {
        SecondName.style.borderColor = ("red")
    }


    const validateCommentsBox = comments.value
        if (validateCommentsBox) {
            comments.style.borderColor = ("blue")
        } else {
            comments.style.borderColor = ("red")
        }
    
    let radioValue = ""
    for (let i = 0; i<RadioList.length; i++ ) {
        if (RadioList[i].checked === true) {
           radioValue = RadioList[i].value
        }
    }
    
    if (firstNameMatches && secondNameMatches && validateCommentsBox) {
        banner.className = "displayBanner"
        bannerName.innerText = SecondName.value
        console.log("First name: " + FirstName.value + "\nSecond name: " + SecondName.value + "\nGender: " + radioValue + "\nComment Box:" + comments.value)
    }
   
}
