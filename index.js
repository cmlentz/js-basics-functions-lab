// Code your solution in this file!
function distanceFromHqInBlocks(streetNum) {
  const hqStreet = 42;
  return Math.abs(streetNum - hqStreet);
};

function distanceFromHqInFeet(blockNum) {
  const hqStreet = 42;
  return (Math.abs(hqStreet - blockNum) * 264);
};

function distanceTravelledInFeet(startBlock, endBlock) {
  return (Math.abs(startBlock - endBlock) * 264);
};

function calculatesFarePrice(start, destination) {
  let distance = (Math.abs(start - destination) * 264);
  let costReply;
  
  if (distance > 2000) {
    costReply = 25;
  }
  if (distance > 400 && distance < 2000) {
    costReply = ((distance - 400) * .02);
  }
  if (distance < 401) {
    costReply = 0;
  }
  if (distance > 2500) {
    costReply = 'cannot travel that far';
  }
  return costReply;
}
