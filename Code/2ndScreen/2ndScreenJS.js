let hy = false; //keeps track if you have the hydra head
Crafty.init(410,410, document.getElementById('game'));
function HydraCutscene() {
  $(".cutscene").css("display","inline");
  $(".game").css("display","none");
  $("#character").css("display","none");
  $("#pictureHydraIce").css("display","none");
  $("#conText").html("Sorry. Boss said I have to eat you, and he is scarier than you.");
  $("#sound").css("top","800px");
  $("#sound").css("left","300px");
  let conversation = 0;
  setInterval(function(){
    conversation++
    switch (conversation) {
      case 1:
        $("#conText").html("It's okay, this will give you plausable deniability.");
        $("#character").css("display", "inline-block");
        $("#hydraL").css("display", "none");
        $("#pictureHydraHead").css("display","none");
        $("#pictureHydraIce").css("display","inline");
        break;
      case 2:
        $("#conText").html("My Head! It's Frozen!");
        $("#hydraL").css("display", "inline-block");
        $("#character").css("display", "none");
        break;
      case 3:
      $(".game").css("display","block");
      $(".cutscene").css("display","none");
      $("#sound").css("top","10px")
      $("#sound").css("left","35px")
        break;
    }
  }, 4000);
}
//vertical walls
for (var v = 0; v < 5; v++) { //this loop creates all the vertical walls
  Crafty.e('2D, DOM, Color, Collision, wall')
    .attr({x: v*100, y: 0, w: 5, h: 405})
    .color('#000')
}

//horizontal walls
for (var h = 0; h < 5; h++) { //this loop creates all the horizantal walls
  Crafty.e('2D, DOM, Color, Collision, wall')
    .attr({x: 0, y: h*100, w: 405, h: 5})
    .color('#000')
}
//doors- I can't automatically create these, as they need names (so all the doors appear when you enter a room) and only specific ones can exist
var vdoor1 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 100, y: 335, z: 2, w: 5, h: 30})
  .color('brown')

var vdoor2 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 200, y: 135, w: 5, h: 30})
  .color('brown')

var vdoor3 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 300, y: 135, w: 5, h: 30})
  .color('brown')

var hdoor1 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 135, y: 300, w: 30, h: 5})
  .color('brown')

var hdoor2 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 135, y: 200, w: 30, h: 5})
  .color('brown')

var hdoor3 = Crafty.e('2D, DOM, Color, Collision, door')
  .attr({x: 135, y: 100, w: 30, h: 5})
  .color('brown')

// creating dark rooms
var dark1 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 100, y: 300, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor1.z = 2;
      this.destroy();
    }
  })

var dark2 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 100, y: 200, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor2.z = 2;
      this.destroy();
    }
  })

var dark3 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 100, y: 100, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      hdoor3.z = 2;
      vdoor2.z = 2;
      this.destroy();
    }
  })

var dark4 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 100, y: 000, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      this.destroy();
    }
  })

var dark5 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 200, y: 100, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      vdoor3.z = 2;
      this.destroy();
    }
  })

var dark6 = Crafty.e('2D, DOM, Color, Collision, dark')
  .attr({x: 300, y: 100, w: 100, h: 100})
  .color('#000')
  .bind("EnterFrame",function(){
    if ((hitDatas = this.hit('player'))) { // If the player enters the room
      this.destroy();
    }
  })

//creating the darkness you cannot enter
var darkness1 = Crafty.e('2D, DOM, Color')
  .attr({x: 000, y: 000, w: 100, h: 300})
  .color('#000')

var darkness2 = Crafty.e('2D, DOM, Color')
  .attr({x: 200, y: 000, w: 200, h: 100})
  .color('#000')

var darkness2 = Crafty.e('2D, DOM, Color')
  .attr({x: 200, y: 200, w: 200, h: 200})
  .color('#000')

//player
var player = Crafty.e("2D, Canvas, Color, Fourway, Collision, player")
  .attr({x: 35, y: 335, z: 2, w: 30, h: 30})
  .color("black")
  .fourway(200)
  .bind('Move', function(evt) { // after player moved
    var hitDatas, hitData;
    if ((hitDatas = this.hit('door'))) {
    }
    else if ((hitDatas = this.hit('wall'))) { // check for collision with walls
      hitData = hitDatas[0]; // resolving collision for just one collider
      if (hitData.type === 'SAT') { // works better, but only if you have the collision component
        // move player back by amount of overlap
        this.x -= hitData.overlap * hitData.nx;
        this.y -= hitData.overlap * hitData.ny;
      } else { // backup, in case something goes wrong. It still works, though not as well
        this.x = evt._x;  // move player to previous position
        this.y = evt._y;
      }
    }
  });

var hydra = Crafty.e('2D, DOM, Color, Collision')
  .attr({x: 137.5, y: 10, z:-1, w: 25, h: 25})
  .color('green')
  .bind('EnterFrame', function() { // every frame
    var hitDatas, hitData;
    if ((hitDatas = this.hit('player'))&&hy==false) { // check if player hits, but has not already hit
      Crafty.stop()
      console.log("hi");
      hy=true;
      HydraCutscene();
      Crafty.init()
    }
  });

var stairs = Crafty.e('2D, DOM, Color, Collision')
  .attr({x: 337.5, y: 110, z:-1, w: 25, h: 25})
  .color('grey')
  .bind('EnterFrame', function() { // every frame
    var hitDatas, hitData;
    if ((hitDatas = this.hit('player'))&&hy==true) { // check if player hits and has hydra head
      window.location.href = "file:///D:/Nia/Documents/SummerProject2019/Code/3rdScreen/3rdScreenHTML.html";
    }
  });

// new Crafty.circle(500, 500, 25)
// .attr({centerX: 500, centerY: 500, radius:25})
// Crafty.e('2D, DOM, Color, Collision, wall')
//   .circle(500, 500, 25)
//   .color('#000')






// window.location.href = "http://www.w3schools.com";
