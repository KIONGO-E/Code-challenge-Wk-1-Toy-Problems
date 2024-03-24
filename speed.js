// Second assignment challenge:Speed Detector
function speedDetector(speed) {
    // The following defines the speed limit and the demerit points corresponding to exceeding said speed limit
    const speedLimit = 70;
    const demeritPointsPer5KmOver = 1;
    const excessSpeed = speed - speedLimit;

    // The following checks whether the driver's speed is within a suitable range
    if (excessSpeed <= 0) {
        return 'Ok';
    } else {
        // The following calculates the demerit points for exceeding the speed limit
        const demeritPoints = Math.floor(excessSpeed / 5) * demeritPointsPer5KmOver;
        // The following checks whether the demerit points qualify the driver for a license suspension
        if (demeritPoints > 12) {
            return 'License suspended';
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}