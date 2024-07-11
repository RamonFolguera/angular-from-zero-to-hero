const skills = ['Bash', 'Counter', 'Healing', true, 123];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // podriamos poner hometown: string | undefined, pero habria que poner undefined abajo.
}

const striger: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

striger.hometown = 'Rivendell';

console.table(striger);

// export {};  para evitar problema y convertir archivo en módulo