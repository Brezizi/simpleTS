type Dataset = {
    nis: number;
    name: string;
    math: number;
    english: number;
    biology: number;
  };

function rataRata(student: Dataset) : any {
    let total = student.math + student.english + student.biology / 3
    return total.toFixed(2)
}

export {rataRata, Dataset}