class ForagerBee extends HoneyMakerBee {
  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
};

ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
}