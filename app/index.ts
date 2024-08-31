// type Siswa = {
//     nama: string;
//     nis: number;
//     tglLahir: Date;
// };

// let nice: Siswa = {
//     nama: "niga",
//     nis: 291801,
//     tglLahir: new Date("2007-12-19"),
// };

// let yeye: Siswa[] = [
//     {
//         nama: "niga",
//         nis: 291801,
//         tglLahir: new Date("2007-12-18"),
//     },
//     {
//         nama: "nigaa",
//         nis: 291801,
//         tglLahir: new Date('2007-12-20'),
//     },
//     {
//         nama: "nigaaa",
//         nis: 291801,
//         tglLahir: new Date("2007-12-17"),
//     },
// ];

// for (let index = 0; index < yeye.length; index++) {
//     console.log(`nama saya ${yeye[index].nama} dengan nis ${yeye[index].nis} dan tahun lahirku ${yeye[index].tglLahir.getFullYear()}`);
// }
import { luasPermukaan, luasPersegi, volKubus } from "./callback";
import { rataRata } from "./unitlities";

// type Dataset = {
//     nis: number;
//     name: string;
//     math: number;
//     english: number;
//     biology: number;
//   };

// let student: Dataset[] = [
//   {
//     nis: 101,
//     name: "Khali",
//     math: 80,
//     english: 75,
//     biology: 60,
//   },
//   {
//     nis: 102,
//     name: "Bobby Lesley",
//     math: 70,
//     english: 90,
//     biology: 80,
//   },
//   {
//     nis: 103,
//     name: "Bautista",
//     math: 75,
//     english: 80,
//     biology: 78,
//   },
//   {
//     nis: 104,
//     name: "Batu",
//     math: 90,
//     english: 90,
//     biology: 85,
//   },
// ];

// for (let index = 0; index < student.length; index++) {
//   let s: any = student[index];
//   let average = s.math + s.english + s.biology / 3;
//   let fix = average.toFixed(2);
//   console.log(`${index}. ${student[index].name} = ${fix}`);
// }

// const highestMathStudent = student.reduce((prev, curr) =>
//   curr.math > prev.math ? curr : prev
// );
// console.log(
//   `NIS: ${highestMathStudent.nis}, Name: ${highestMathStudent.name}, Highest Math Score: ${highestMathStudent.math}`
// );

// const bestAverageStudent = student.reduce((prev, curr) => {
//   const prevAverage = (prev.math + prev.english + prev.biology) / 3;
//   const currAverage = (curr.math + curr.english + curr.biology) / 3;
//   return currAverage > prevAverage ? curr : prev;
// });

// const bestAverage =
//   (bestAverageStudent.math +
//     bestAverageStudent.english +
//     bestAverageStudent.biology) /
//   3;
// console.log(
//   `NIS: ${bestAverageStudent.nis}, Name: ${
//     bestAverageStudent.name
//   }, Best Average Score: ${bestAverage.toFixed(2)}`
// );

// const biologyBelow80 = student.filter((s) => s.biology < 80);
// console.log("Students with Biology scores below 80:");
// biologyBelow80.forEach((s) => {
//   console.log(`NIS: ${s.nis}, Name: ${s.name}, Biology Score: ${s.biology}`);
// });

// const averageAbove80 = student.filter((s) => {
//   const average = (s.math + s.english + s.biology) / 3;
//   return average > 80;
// });

// console.log("Students with an average score above 80:");
// averageAbove80.forEach((s) => {
//   const average = (s.math + s.english + s.biology) / 3;
//   console.log(
//     `NIS: ${s.nis}, Name: ${s.name}, Average Score: ${average.toFixed(2)}`
//   );
// });

const sisi: number = 50
luasPersegi(sisi, luasPermukaan);
luasPersegi(sisi, volKubus);