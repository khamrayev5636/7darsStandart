const elForm = document.querySelector(".form");
const elInputName = document.querySelector(".input-name");
const elInputSurName = document.querySelector(".input-surname");
const elInputNumber = document.querySelector(".input-number");
const elText = document.querySelector(".list");

const array = [];
let numberId = 0;

const myFunctionArray = function(){
    
    elText.innerHTML = ""
    
    array.forEach((element) => {
        
        const elItem = document.createElement("li");
        elItem.classList.add("item-js" , "me-3");
        
        const elCount = document.createElement("span");
        elCount.classList.add("count-js");
        elCount.textContent = element.countNumber;
        elItem.appendChild(elCount);
        
        const elTitle = document.createElement("h4");
        elTitle.classList.add("text-white" , "fw-bold");
        elTitle.textContent = element.arrayName + " " + element.arraySurName;
        elItem.appendChild(elTitle);
        
        
        const elPhoneNumber = document.createElement("p");
        elPhoneNumber.classList.add("text-info")
        elPhoneNumber.textContent = element.arrayNumber;
        elItem.appendChild(elPhoneNumber);
        
        const eldeletBtn = document.createElement("button");
        eldeletBtn.type = "button";
        eldeletBtn.dataset.id = element.id;
        eldeletBtn.classList.add("btn-del" , "btn" , "btn-danger");
        eldeletBtn.textContent = "Delete"
        elItem.appendChild(eldeletBtn)
        
        elText.appendChild(elItem);
        
    });
}

elForm.addEventListener("submit" , (evt)=> {
    evt.preventDefault();
    
    array.push(
        {
            id : ++numberId,
            countNumber : array.length + 1,
            arrayName : elInputName.value,
            arraySurName : elInputSurName.value,
            arrayNumber : Number(elInputNumber.value),
        }
        );
        
        elForm.reset();
        myFunctionArray()
        
    });
    
    
    elText.addEventListener("click" , evt => {
        
        if(evt.target.matches(".btn-del")){
            
            const deletBtn = Number(evt.target.dataset.id);
            const deletFindIndex = array.findIndex((item) => {
                return item.id === deletBtn
            });
            
            array.splice(deletFindIndex, 1);
            myFunctionArray();
        }
    });
    
    
    // ========================================== DAYS OF THE WEEK ==================================
    
    const elFormWeek = document.querySelector(".week-form");
    const elInputWeek = elFormWeek.querySelector(".week-input");
    const elAlertWeek = document.querySelector(".week-alert");
    
    elFormWeek.addEventListener("submit" , evt => {
        evt.preventDefault();
        
        const inputValue = Number(elInputWeek.value.trim());
        
        switch (inputValue) {
            case 1:
            elAlertWeek.textContent = "Dushanba";
            elAlertWeek.classList.add("text-bg-warning");
            elAlertWeek.classList.remove("text-bg-danger");
            break;
            case 2:
            elAlertWeek.textContent = "Seshanba";
            elAlertWeek.classList.add("text-bg-warning");
            elAlertWeek.classList.remove("text-bg-danger");
            break;
            case 3:
            elAlertWeek.textContent = "Chorshanba";
            elAlertWeek.classList.add("text-bg-warning");
            elAlertWeek.classList.remove("text-bg-danger");
            break;
            case 4:
            elAlertWeek.textContent = "Payshanba";
            elAlertWeek.classList.add("text-bg-warning");
            elAlertWeek.classList.remove("text-bg-danger");
            break;
            case 5:
            elAlertWeek.textContent = "Juma";
            elAlertWeek.classList.add("text-bg-info");
            elAlertWeek.classList.remove("text-bg-danger");
            elAlertWeek.classList.remove("text-bg-warning");
            break;
            case 6:
            elAlertWeek.textContent = "Shanba";
            elAlertWeek.classList.add("text-bg-danger");
            elAlertWeek.classList.remove("text-bg-warning");
            elAlertWeek.classList.remove("text-bg-info");
            break;
            case 7:
            elAlertWeek.textContent = "Yakshanba";
            elAlertWeek.classList.add("text-bg-danger")
            elAlertWeek.classList.remove("text-bg-info");
            elAlertWeek.classList.remove("text-bg-warning");
            break;
            
            default: 
            elAlertWeek.textContent = "Iltimos 1-7 gacha son kiriting!!"
            elAlertWeek.classList.add("fw-bold");
            elAlertWeek.classList.remove("text-bg-info");
            elAlertWeek.classList.remove("text-bg-warning");
        }
        
        
    })