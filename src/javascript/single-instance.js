function Singletion(name) {
  this.name = name
  this.instance = null
}

Singletion.prototype.getName = function() {
  console.log(this.name);
}

Singletion.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singletion(name)
  }
  return this.instance
}

const a = Singletion.getInstance('a');
const b = Singletion.getInstance('b')
