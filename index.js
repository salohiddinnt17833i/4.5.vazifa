

/**
 * 0 Masala
 * 1 dan 100 gcha bolgan sonlarni ekranga chiaring
 */
// for (let i = 0; i <= 100; i++) {
//     console.log(i);    
// }

/**
 * 1 Masala
 * 1 dan n gacha sonlarni ekranga chiqaruvchi dastur yozing
 */
// let number = +prompt(`ISlatgan son kiriting`)
// for(let i = 1; i <= number; i++){
//     document.write(i)
// }


/**
 * 2 Masala
 * 1 dan n gacha sonlar yigindisini hisoblovchi dastur yozing
 */
// let number = +prompt(`Sonni kiriting`);
// let counter = 0;
// for(let i = 1; i <= number; i++){
//     counter += i;
// }
// console.log(counter);


/**
 * 3 Masala
 * 1 dan n gacha barcha toq sonlar yigindisini topuvchi dastur yozing
 */
// let num = +prompt(`sonni kiriting`)
// let sum = 0;
// for (let i = 1; i <= num; i++){
//     if (i % 2 == 0) {
//         sum += i
//     }
// }
// console.log(sum);


/**
 * 4 Masala
 * a dan b gacha barcha juft sonlar kopaytasini toping
 */
// let b = 12;
// let sum = 1;

// for (let a = +prompt(`sonni kiriting`); a <= b; a++) {
//     if (a % 2 == 0) {
//         sum = sum * a;
//     }
// }
// console.log(sum);


/**
 * 5 Masala
 * a dan b gacha barcha 3 ga hamda 5 ga karrali sonlar  yigindisini
 *  topuvchi algaritm yozing
 */
// let b = 12;
// let sum = 1;

// for (let a = +prompt(`sonni kiriting`); a <= b; a++) {
//     if (a % 3 == 0 && a % 5 == 0) {
//         sum = sum + a;
//     }
// }
// console.log(sum);


/**
 * 6 Masala
 * Berilgan sonning boluvchilarining sonini topuvchi algoritm yozing
 */
// let number = 14;
// let counter = 0;

// for(let i = 1; i <= number; i++){
//     if (number % i == 0) counter++;
// }

// console.log(counter);


/**
 * 7 Masala
 * Berilgan sonning tub yoki tub emasligini tekshiring
 */
// let number = 11;
// let counter = 0;
// let res = `Tub son emas`

// for (let i = 1; i <= number; i++) {
//     if (number % i == 0) {
//         counter++;
//     }
// }
// if (counter === 2) {
//     res = `Tub son`
// }
// console.log(res);