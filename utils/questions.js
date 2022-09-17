const questionsDP = [
    {

        type: 'list',
        name: 'Design Pattern',
        message: 'Choose the Design Pattern you want to use:',
        choices: ['MVC', 'RESTful API'],
    }
];

const questionsMVC = [
    {
        type: 'list',
        name: 'MVC',
        message: 'Choose the MVC framework which you want to use:',
        choices: ['TallStack', 'DjangoMTV (coming soon)'],
    }
];

const questionsRestApi = [
    {
        type: 'list',
        name: 'frontend',
        message: 'Choose the front framework which you want to use:',
        choices: ['VueJs', 'NuxtJS', 'React', 'NextJS', 'Angular', 'Svelte'],
    },
    {
        type: 'list',
        name: 'backend',
        message: 'Choose the backend framework which you want to use:',
        choices: ['Express', 'NestJS', 'AdonisJS', 'Fastify', 'Django', 'Laravel', 'Spring Boot', 'Dotnet Core',],
    },
];

const questionsPM = [
    {
        type: 'list',
        name: 'packageManager',
        message: 'Choose the package manager which you are using:',
        choices: ['npm', 'yarn'],
    },
];

const questionsDB = [
    {
        type: 'list',
        name: 'database',
        message: 'Choose the database which you want to use:',
        choices: ['MongoDB', 'SQLite'],
    }
];

const _questionsMVC = questionsMVC;
export { _questionsMVC as questionsMVC };
const _questionsRestApi = questionsRestApi;
export { _questionsRestApi as questionsRestApi };
const _questionsDB = questionsDB;
export { _questionsDB as questionsDB };
const _questionsPM = questionsPM;
export { _questionsPM as questionsPM };
const _questionsDP = questionsDP;
export { _questionsDP as questionsDP };
