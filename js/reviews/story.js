const shuffledFragments = [
  {
    id: 15,
    text: "and, after a time, passed the place where the Hare was sleeping.",
  },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  {
    id: 11,
    text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
  },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  {
    id: 6,
    text: "The Hare was much amused at the idea of running a race with the Tortoise,",
  },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];
function compactFragments(arr) {
  const newarr = [];
  let bool = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      newarr.push(arr[i]);
    }
    if(arr[i] === undefined){
      bool = true;
    }
  }
  if (bool === true) {
    console.log(`[COMPACTED]`);
  }
  return newarr;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(arr) {
  let sort = structuredClone(arr);
  for (let i = 0; i < sort.length; i++) {
    for (let j = 0; j < sort.length - 1; j++) {
      let num = sort[j].id;
      let futNum = sort[j + 1].id;
      let futArr = sort[j + 1];
      if (num > futNum) {
        let temp = futArr;
        sort[j+1] = sort[j];
        sort[j] = temp;
      }
    }
  }
  return sort;
}
const sortedFragments = sortFragments(compactedShuffledFragments);

const dedupeFragments = arr => {
  let seenID = [];
  let newArr = [];
  for(i=0;i<arr.length;i++){
    let id = arr[i].id;
    if(!seenID.includes(id)){
      seenID.push(id);
      newArr.push(arr[i]);
    }
    else{
      continue;
    }
  }
  return newArr;
}
const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(arr){
  const newarr = []
  for(let i =0;i<arr.length;i++){
    let id = arr[i].id;
    if(id === arr[arr.length - 1].id){
      newarr.push(arr[i]);
      return newarr;
    }
    
    else if(arr[i+1].id !== id + 1){
      newarr.push(arr[i]);
      for(let j=1;j<=arr[i+1].id - id - 1;j++){
        let missingId = id + j;
        const testObj = { id: missingId, text: "[...]" }
      newarr.push(testObj);
        console.log("[FILLED]");
      }
    }
    else{
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(arr){
  let story = "";
  for(let i = 0;i<arr.length;i++){
    story += arr[i].text;
    if(i < arr.length - 1){
      story += "\n";
    }
  }
  return story;
}
console.log(assembleStory(filledFragments));