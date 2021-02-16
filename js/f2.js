  const radius = Number(prompt("Enter the circle radius:"));
  function circle(radius)
  {
      this.radius = radius;
    
      this.area = function () 
      {
          return Math.PI * this.radius * this.radius;
      };
    
      this.circumference = function ()
      {
          return 2*Math.PI*this.radius;
      };
  }
  var c = new circle(radius);
  console.log(`Its area is ${c.area()}`);
  console.log(`Its circumference is ${c.circumference()}`);
