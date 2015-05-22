var cm_tline = null;
<
function Orbit(objId)
{
  var elem = document.getElementById(objId),
      radius = 80,
      va = 3,             // angular velocity, 3 radians / sec
      cx = 120,           // coordinates of orbit center
      cy = 120,
      ang = 0,
      savTime = 0,       // time when last frame was drawn
      playing = false;

  function circularPath()
  {
    var x, y,
        currTime = Date.now(),
        dt = currTime - savTime;      // time since last frame

    ang += va*dt/1000;                // angle moved at constant angular velocity
    if (ang > 2*Math.PI)              // wraparound for angle
    {
      ang -= 2*Math.PI;
    }
    x = cx + radius * Math.cos(ang);  // calculate coords of ball
    y = cy + radius * Math.sin(ang);
    elem.style.left = x + "px";       // move the element
    elem.style.top = y + "px";

    savTime = currTime;               // save the time this frame is drawn
    if (playing)
    {
      requestAnimationFrame(circularPath);
    }
  };

  this.play = function()
  {
    playing = true;
    savTime = Date.now();             // reset to avoid a jump in angle
    requestAnimationFrame(circularPath);
  };

  this.pause = function()
  {
    playing = false;                  // stop after next frame
  }
}


//////////
 if(myRobot.x<=250 && myRobot.y==50) {
          myRobot.x = newX;
        }
        if(myRobot.x ==250&& myRobot.y<=120) {
          myRobot.y = newY;
        }
        if(myRobot.x >=250&& myRobot.y ==120) {
          myRobot.x = newMoinsX;
        }
        if(myRobot.x ==50&& myRobot.y >=120) {
          myRobot.y = newMoinsY;
        }