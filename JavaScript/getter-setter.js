const data = {
    locations:[],
    get location(){
        return this._location
    },
    set location(value){
        this._location = value.trim();
        this.locations.push(this._location);
    }
}

console.log(data.location);//getter

data.location = "This is set data";
data.location = "New York";
console.log(data.locations);
