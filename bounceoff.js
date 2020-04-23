function bounceoff(a1, a2)
{
  if(a2.x - a1.x < (a2.width/2 + a1.width/2) && a1.x - a2.x < (a1.width/2 + a2.width/2))
  {
  a1.velocityX = a1.velocityX * (-1);
  a2.velocityX = a2.velocityX * (-1);
  }
  if(a2.y - a1.y < (a2.height/2 + a1.height/2) && a1.y - a2.y < (a1.height/2 + a2.height/2))
  {
	a1.velocityY = a1.velocityY * (-1);
	a2.velocityY = a2.velocityY * (-1); 
  }
}