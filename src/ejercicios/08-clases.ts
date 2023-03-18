/*
    ===== Código de TypeScript =====
*/

class NormalPerson {
    
    constructor(
        public name: string,
        public address: string
    ) {}

}

class Hero extends NormalPerson {
    
    constructor(
        public alterEgo: string, 
        public age: number, 
        public realName: string
    ) { 
        super(realName, "New York, USA") ;
    }

}

const ironman = new Hero('Ironman', 45, 'Tony Stark');
console.log(ironman);