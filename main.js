"strict mode";

const kyleHamStats2023 = {
  tackles: 81,
  assist: 18,
  sacks: 3,
  forcedFumbles: 1,
  interceptions: 4,
  tackleForLoss: 7,
};

const edReedStats2004 = {
  tackles: 76,
  assist: 62,
  sacks: 2,
  forcedFumbles: 3,
  interceptions: 9,
  tackleForLoss: 6,
};

const troyPolamaluStats2010 = {
  tackles: 63,
  assist: 14,
  sacks: 1,
  forcedFumbles: 1,
  interceptions: 7,
  tackleForLoss: 15,
};

function tackleCompare() {
  if (
    kyleHamStats2023.tackles > edReedStats2004.tackles &&
    kyleHamStats2023.tackles > troyPolamaluStats2010.tackles
  ) {
    return `Kyle Hamiliton had ${kyleHamStats2023.tackles} tackles in the 2023 season.`;
  }
  if (
    kyleHamStats2023.tackles < edReedStats2004.tackles &&
    kyleHamStats2023.tackles > troyPolamaluStats2010.tackles
  ) {
    return `Ed reed had ${edReedStats2004.tackles} tackles in the 2004 season.`;
  }
}



function interceptions() {
  return (kyleHamStats2023.interceptions > edReedStats2004.interceptions &&
    kyleHamStats2023.interceptions > troyPolamaluStats2010.interceptions)
    ? `Kyle Hamiliton had ${interceptions} interceptions in the 2023 season.`
    : (edReedStats2004.interceptions > kyleHamStats2023.interceptions &&
      edReedStats2004.interceptions > troyPolamaluStats2010.interceptions)
    ? `Ed reed had ${edReedStats2004.interceptions} interceptions in the 2004 season.`
    : (troyPolamaluStats2010.interceptions > edReedStats2004.interceptions &&
      troyPolamaluStats2010.interceptions > kyleHamStats2023.interceptions)
      `Troy polomalu had ${troyPolamaluStats2010.interceptions} interceptions in the 2010 season.`;
}



function assitedTackles() {
  return (kyleHamStats2023.assist > edReedStats2004.assist &&
    kyleHamStats2023.assist > troyPolamaluStats2010.assist)
    ? `Kyle Hamiliton had ${kyleHamStats2023.assist} assisted tackles in the 2023 season.`
    : (edReedStats2004.assist > kyleHamStats2023.assist &&
      edReedStats2004.assist > troyPolamaluStats2010.assist)
    ? `Ed Reed had ${edReedStats2004.assist} assisted tackles in the 2004 season. `
    : troyPolamaluStats2010 > kyleHamStats2023.assist &&
      troyPolamaluStats2010.assist`Troy Polamalu had ${troyPolamaluStats2010.assist} assisted tackles in the 2010 season.`;
}



function forcedFumbles() {
  return (kyleHamStats2023.forcedFumbles > edReedStats2004.forcedFumbles &&
    kyleHamStats2023.forcedFumbles > troyPolamaluStats2010.forcedFumbles)
    ? `Kyle Hamiltion had ${kyleHamStats2023.forcedFumbles} forced fumbles in the 2023 season.`
    : (edReedStats2004.forcedFumbles > kyleHamStats2023.forcedFumbles &&
      edReedStats2004.forcedFumbles > troyPolamaluStats2010.forcedFumbles)
    ? `Ed Reed had ${edReedStats2004.forcedFumbles} forced fumbles in the 2004 season. `
    : troyPolamaluStats2010.forcedFumbles > edReedStats2004.forcedFumbles &&
      kyleHamStats2023.forcedFumbles
      `Troy Polomalu had ${troyPolamaluStats2010.forcedFumbles} forced fumbles in the 2010 season.`;
}



function sacks() {
  return (kyleHamStats2023.sacks > edReedStats2004.sacks &&
    kyleHamStats2023.sacks > troyPolamaluStats2010.sacks)
    ? `Kyle Hamiltion had ${kyleHamStats2023.sacks} sacks in the 2023 season. `
    : (edReedStats2004.sacks > kyleHamStats2023.sacks &&
      edReedStats2004.sacks > troyPolamaluStats2010.sacks)
    ? `Ed Reed had ${edReedStats2004.sacks} sacks in the 2004 season.`
    : troyPolamaluStats2010.sacks > kyleHamStats2023.sacks &&
      edReedStats2004.sacks
      `Troy Polomalu had ${troyPolamaluStats2010.sacks} sacks in the 2010 season`;
}


function tacklesForaLoss() {
  return (kyleHamStats2023.tackleForLoss > edReedStats2004.tackleForLoss &&
    kyleHamStats2023.tackleForLoss > troyPolamaluStats2010.tackleForLoss)
    ? `Kyle Hamiltion had ${kyleHamStats2023.tackleForLoss} tackles for a loss in the 2023 season.`
    : (edReedStats2004.tackleForLoss > kyleHamStats2023.tackleForLoss &&
      edReedStats2004.tackleForLoss > troyPolamaluStats2010.tackleForLoss)
    ? `Ed Reed had ${edReedStats2004.tackleForLoss} tackles for a loss in the 2004 season.`
    : `Troy Polomalu had ${troyPolamaluStats2010.tackleForLoss} tackles for a loss in the 2010 season. `;
}


const statSummary = [sacks() , tacklesForaLoss(), sacks() , forcedFumbles() , interceptions() , assitedTackles() , tackleCompare()]


const sortedSummary = statSummary.toSorted();

const stringSummary = sortedSummary.toString();





function stats() {
  return tacklesForaLoss() + sacks() + forcedFumbles() +
  interceptions() + assitedTackles() + tackleCompare()
}

 for (let i = 0; i < sortedSummary.length; ++i) {
  console.log(statSummary[i])
}