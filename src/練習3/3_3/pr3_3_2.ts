type Animal = {
    "age": number;
};

type Human = {
    "age": number;
    "name": string;
};

type Animalfam = {
    "famname": string;
    "mother": Animal;
    "father": Animal;
};

type Humanfam = {
    "famname": string;
    "mother": Human;
    "father": Human;
}