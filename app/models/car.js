const cars = [
    {
        id: 1,
        model: "X5"
    },
    {
        id: 2,
        model: "Land Cruiser"
    },
    {
        id: 3,
        model: "Legacy B4"
    }
];
 
module.exports = class Car{
 
    constructor(id, model){
        this.id = id;
        this.model = model;
    }

    static getAll(){
        return cars;
    }


    static getCar(idCar){

        var car = cars.find(function(e){
            return e.id == idCar;
        });

        return car;
        
    }
}