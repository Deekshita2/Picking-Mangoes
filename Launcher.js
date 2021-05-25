class Launcher
{
	constructor(bodyA, pointB)
	{
		var options={
			
			bodyA: bodyA,
			pointB: pointB,
			stiffness: 0.04,
			length: 5

			}
		this.bodyA = bodyA
		this.pointB = pointB
		this.launcher = Constraint.create(options);
 		World.add(world, this.launcher);

	}

	fly(){

		this.launcher.bodyA = null

	}

	attach(body){

		this.launcher.bodyA = body


	}



	display()
	{
		if(this.launcher.bodyA){

			var pointA = this.bodyA.position
			var pointB = this.pointB
			
			stokeWeight(3);
			line(pointA.x, pointA.y, pointB.x, pointB.y);

		}
			
	}

}