registerPaint('smile', class {
    static get inputProperties() { return ['--circle-color', '--smile-color']; }
    paint(ctx, geom, properties) {
	// Change the fill color.
	const circle = properties.get('--circle-color').cssText;
	const face = properties.get('--smile-color') ? properties.get('--smile-color').cssText : 'black';

	// Determine the center point and radius.
	const xCircle = geom.width / 2;
	const yCircle = geom.height / 2;
	const radiusCircle = Math.min(xCircle, yCircle) - 2.5;

	const xFace = geom.width / 20;
	const yFace = geom.height / 20;
	const radiusFace = Math.min(xFace, yFace);

	// Draw the circle \o/
	ctx.beginPath();
	ctx.arc(xCircle, yCircle, radiusCircle, 0, 2 * Math.PI);
	ctx.fillStyle = circle;
	ctx.fill();
	ctx.lineWidth = 2.5;
	ctx.strokeStyle = face;
	ctx.stroke();

	// Draw the eyes
	ctx.beginPath();
	const eyeY = yCircle - yFace * 2;

	let eyeX = xCircle - xFace;
	if (eyeX < xCircle - radiusCircle / 2) {
	  eyeX = xCircle - radiusCircle / 2;
	}
	ctx.arc(eyeX, eyeY, radiusFace, 0, 2 * Math.PI);

	eyeX += xFace * 2;
	if (eyeX > xCircle + radiusCircle / 2) {
	  eyeX = xCircle + radiusCircle / 2;
	}

	ctx.arc(eyeX, eyeY, radiusFace, 0, 2 * Math.PI);
	ctx.fillStyle = face;
	ctx.fill();

	// draw the mouth
	ctx.beginPath();
	ctx.arc(xCircle, yCircle, radiusCircle / 2, 0, Math.PI, false);
	ctx.lineWidth = 2.5;
	ctx.strokeStyle = face;
	ctx.stroke();
    }
});
