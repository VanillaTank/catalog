//очитска полей ввода
function clearInputs() {
    var allInputs = document.querySelectorAll(".input");
    allInputs.forEach(function(item) {
        item.value = "";
    });
}

//Добавление книг
var btnAddBook = document.getElementById('btnAddBook');

function addBookInVault() {
    var titleOfBook = document.getElementById('titleOfBook').value.toLowerCase();
    var userNameOfBook = document.getElementById('titleOfBook').value;
    var yearOfBook = document.getElementById('yearOfBook').value;
    var userAnnotattion = document.getElementById('userAnnotattion').value;
    var userAuthor = document.getElementById('userAuthor').value;
    var userPlace = document.getElementById('userPlace').value;
    
    var checkNameOfBook = localStorage.getItem(titleOfBook); //проверка, есть ли в хранилище такая книга
    
    if(checkNameOfBook) {
        clearInputs();
        console.log("Такая книга есть");
    } else {
        clearInputs();
        console.log('Добавляем книгу');
        var  stringOfAttrOfBook = [userNameOfBook, yearOfBook, userAnnotattion, userAuthor, userPlace].join('--');
        localStorage.setItem(titleOfBook, stringOfAttrOfBook);
    }
}

btnAddBook.addEventListener('click', addBookInVault);
//Поиск книг в хранилище
var nameOfBookInput = document.getElementById('nameOfBook');
var resultOfSearch = document.getElementById('result');
var searchButton = document.getElementById('search');
var errorBlock = document.getElementById('error');


function searchBook() {
    
    errorBlock.classList.remove("errorTrue");
    resultOfSearch.classList.remove('error'); 
    var nameOfBook = nameOfBookInput.value.toLowerCase();
    var checkNameOfBook = localStorage.getItem(nameOfBook);


    if(checkNameOfBook) {
        document.getElementById('nameOfBook').value = "";
        console.log("Такая книга есть");
        var arreyOfFindedBook = checkNameOfBook.split('--');
        document.getElementById("bookName").innerHTML = arreyOfFindedBook[0]; 
        document.getElementById("bookAnnotation").innerHTML = arreyOfFindedBook[2];
        document.getElementById("bookAuthor").innerHTML = arreyOfFindedBook[3];
        document.getElementById("bookYear").innerHTML = arreyOfFindedBook[1];
        document.getElementById("bookPlace").innerHTML = arreyOfFindedBook[4];
    } else {
        document.getElementById('nameOfBook').value = "";
        errorBlock.classList.add("errorTrue");
        resultOfSearch.classList.add('error');
    }
}
searchButton.addEventListener('click', searchBook); 


//переключение по табам
const btnMenage = document.querySelectorAll('.btn-menage');
const containers = document.querySelectorAll('.container');

btnMenage.forEach(onBtnClick);

function onBtnClick(item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        

        if( ! currentBtn.classList.contains('active')) {
            btnMenage.forEach(function (item) {
                item.classList.remove('active');
            })
            containers.forEach(function (item) {
                item.classList.remove('active');
            })

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
        if(tabId == '#containerDeliteBook') {
            document.getElementById('inputBookToDelete').focus();
        }else if (tabId == '#containerSearchBook') {
            document.getElementById('nameOfBook').focus();
        }else if (tabId == '#containerAddBook')
            document.getElementById('titleOfBook').focus();
    })
}
document.querySelector('.btn-menage').click();

//удаление книги
var btnDelete = document.getElementById('delete');

btnDelete.addEventListener('click', function(){
    var inputBookToDelete = document.getElementById('inputBookToDelete').value.toLowerCase();
    var checkNameOfBook = localStorage.getItem(inputBookToDelete);

    if(checkNameOfBook) {
        localStorage.removeItem(inputBookToDelete);
        alert('Книга удалена');
    } else {
        alert('Упс, такой книги нет');
    }
    clearInputs();
})





