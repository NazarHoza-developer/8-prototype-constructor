// 1 У стдентів повинні бути наступні властивості: university, course, 
// fullName, вони передаються при створенні студента(в конструктор).

// 2  Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії
//  м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс,
//   учбовий заклад та імені студента.

// 3 Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

// 4 Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку
//  студенту. Після того, як оцінка поставлена, геттер 
//  повинен повернути масив this.marks -> [5, 4, 4, 5, 5]

// 5 Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

// 6 Створіть метод this.dismiss, який "виключить" студента. 
// Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. 
// (Ніяких помилок, просто повертається завжди null замість масиву оцінок)

// 7 Створіть метод this.recover, який дозволить поновити студента

class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dissmis = false;
    }

       getInfo() {
        return `Cтудент ${this.course} курсу ${this.university}, ${this.fullName}`;
    }
    get marks() {
        if(!this.dissmis) {
            return this._marks;
        }
        return null;
    }
    set marks(value) {
        if (!this.dissmis) {
            this._marks = Array.isArray(this.marks) ? this._marks : [];
            this._marks.push(value);
            this._marks = this._marks.flat(Infinity);
            return this._marks
        }
        return null
    }
    getAverageMark() {
        return (
            this.marks.reduce((sum, a) => sum + a, 0) / this.marks.length
        );
    }
    diss() {
        this.dissmis = true;
    }
    recover() {
        this.dissmis = false;
    }
}
class BudgetStudent extends Student  {
    constructor(university, course, fullName, marks, scholarShip) {
        super(university, course, fullName, marks);
        this.scholarShip = scholarShip;
        window.setInterval(this.getScholaship.bind(this), 7000)
    }
    getScholaship() {
        if (!this.dissmis && this.getAverageMark() >= 4 ) {
            console.log(`Студент ${this.fullName} отримав ${this.scholarShip} грн. стипендії`);
    }
    return null;
    }
}

const student = new Student(
    "Вищої Школи Психотерапії м.Львів",
    1,
    "Остап Родоманський",
    [5, 4, 4, 5, 5]
  );
  
  const budgetStudent = new BudgetStudent(
    "Вищої Школи Психотерапії м.Львів",
    1,
    "Степан Бендер",
    [4, 4, 5, 4, 4],
    1400
  );
  

console.log(student.getInfo());

console.log(student.getAverageMark());
