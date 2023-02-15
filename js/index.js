let myYear = prompt('Введите год')

if(((myYear % 4 == 0) && (myYear % 100 != 0)) || (myYear % 400 == 0)){
    console.log(' Год является високосным (у него 366 дней)');
} else {
    console.log('Год не високосный (у него 365 дней)');
}