const arrayOfJsonsFiles = ["json10", "json100", "json101", "json102", "json103", "json104", "json105", "json106", "json107", "json108", "json109", "json11", "json110", "json112", "json113", "json114", "json115", "json116", "json117", "json118", "json119", "json12", "json120", "json121", "json122", "json123", "json124", "json125", "json126", "json127", "json128", "json129", "json13", "json130", "json131", "json132", "json133", "json134", "json135", "json136", "json137", "json138", "json139", "json14", "json140", "json141", "json142", "json143", "json144", "json145", "json146", "json147", "json148", "json149", "json15", "json150", "json151", "json152", "json153", "json154", "json155", "json156", "json157", "json158", "json159", "json16", "json160", "json166", "json167", "json168", "json169", "json17", "json170", "json171", "json172", "json174", "json175", "json176", "json177", "json178", "json179", "json18", "json180", "json181", "json182", "json183", "json184", "json185", "json186", "json187", "json188", "json189", "json19", "json190", "json191", "json193", "json194", "json195", "json196", "json198", "json199", "json20", "json204", "json206", "json207", "json208", "json21", "json210", "json211", "json212", "json213", "json214", "json215", "json216", "json217", "json218", "json219", "json22", "json220", "json221", "json222", "json223", "json224", "json225", "json226", "json227", "json228", "json229", "json23", "json230", "json231", "json232", "json233", "json234", "json235", "json236", "json237", "json238", "json239", "json24", "json240", "json241", "json242", "json243", "json244", "json245", "json246", "json250", "json260", "json262", "json263", "json264", "json265", "json269", "json270", "json271", "json272", "json273", "json274", "json275", "json276", "json277", "json278", "json279", "json280", "json281", "json282", "json283", "json294", "json295", "json296", "json297", "json298", "json3", "json30", "json300", "json301", "json302", "json303", "json304", "json305", "json31", "json32", "json320", "json321", "json322", "json323", "json324", "json325", "json326", "json33", "json34", "json35", "json36", "json37", "json376", "json377", "json378", "json379", "json38", "json380", "json381", "json382", "json383", "json384", "json387", "json388", "json39", "json390", "json391", "json393", "json394", "json396", "json397", "json398", "json399", "json4", "json40", "json400", "json401", "json403", "json404", "json405", "json406", "json407", "json408", "json409", "json412", "json413", "json414", "json416", "json417", "json42", "json420", "json422", "json423", "json424", "json425", "json426", "json427", "json428", "json429", "json43", "json430", "json432", "json433", "json434", "json435", "json436", "json437", "json438", "json439", "json44", "json440", "json443", "json444", "json445", "json446", "json447", "json449", "json45", "json450", "json451", "json452", "json453", "json457", "json458", "json459", "json46", "json460", "json462", "json463", "json464", "json465", "json466", "json467", "json469", "json47", "json471", "json473", "json474", "json475", "json476", "json477", "json478", "json479", "json48", "json480", "json483", "json484", "json485", "json486", "json487", "json488", "json489", "json49", "json490", "json491", "json493", "json494", "json495", "json496", "json497", "json498", "json499", "json5", "json50", "json500", "json501", "json502", "json503", "json504", "json505", "json506", "json507", "json51", "json52", "json522", "json523", "json525", "json526", "json527", "json53", "json54", "json549", "json55", "json553", "json568", "json570", "json572", "json574", "json576", "json577", "json578", "json579", "json580", "json581", "json583", "json584", "json587", "json594", "json595", "json6", "json603", "json619", "json636", "json637", "json638", "json639", "json64", "json640", "json641", "json642", "json643", "json645", "json646", "json647", "json649", "json65", "json651", "json654", "json656", "json657", "json66", "json661", "json662", "json666", "json667", "json67", "json671", "json672", "json674", "json675", "json679", "json68", "json683", "json685", "json69", "json7", "json70", "json71", "json72", "json722", "json729", "json73", "json731", "json732", "json734", "json735", "json736", "json738", "json739", "json74", "json745", "json75", "json755", "json756", "json757", "json758", "json76", "json761", "json764", "json768", "json769", "json77", "json770", "json774", "json78", "json79", "json8", "json80", "json81", "json82", "json821", "json822", "json83", "json84", "json85", "json86", "json87", "json88", "json89", "json9", "json90", "json91", "json92", "json93", "json94", "json95", "json96", "json97", "json98", "json988", "json99"];
const initialObject = {
  name: '',
  clicks: 0,
  lp_clicks: 0,
  lp_ctr_8053: 0,
  lp_ctr: 0,
  leads: 0,
  approved: 0, // нет
  hold: 0,  // нет
  rejected: 0, // нет
  cr: 0,
  epc: 0,
  cpc: 0,
  epl: 0, // нет
  cpl: 0, // нет
  h_revenue: 0,
  revenue: 0,
  cost: 0,
  profit: 0,
  roi: 0,
  approve: 0, // нет
  optimal_bid: 0
};
const commonProperties = ['name', 'clicks', 'lp_clicks', 'lp_ctr_8053', 'lp_ctr', 'leads', 
'approved', 'hold', 'rejected', 'cr', 'epc', 'cpc', 'epl', 'cpl', 'h_revenue', 'revenue',
'cost', 'profit', 'roi', 'approve', 'optimal_bid'];

async function getDataFromJson(name) {
  try {
    const response = await fetch(`./json/${name}.txt`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function combineJsonFiles() {
  const arr = [];
    for (let i = 0; i < arrayOfJsonsFiles.length; i++) {
      arr.push(getDataFromJson(arrayOfJsonsFiles[i]));
    }
  return Promise.all(arr);
}

const data = combineJsonFiles().then(result => {
    const combinedArray = [];
    result.map(arr => {
      arr.map(item => combinedArray.push(item));
    });
    return combinedArray;
  }
);

const dataStructuring = () => {
  const newArray = [];
  data.then(response => {
    response.map(obj => {
      commonProperties.map(item => {
        initialObject[item] = obj[item];
      });
      // debugger;
      newArray.push({...initialObject});
    });
    return newArray;
  })
  .then(response => {
    console.log(response);
    const uniqueArray = findUniqueName(response);
    const fullArray = SummaryOfSameElements(response, uniqueArray);
    const readyArray = RemoveOfSameElements(fullArray, uniqueArray);
    const json = toJson(readyArray);
    putToJson(json, 'json.txt', 'text/plain');
  });
};

const toJson = (arr) => {
  return JSON.stringify(arr);
};

putToJson = (content, fileName, contentType) => {
  const a = document.createElement("a");
    const file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    // a.click();
};

const findUniqueName = (arr) => {
  const arrayOfUniqueNames = [];
  const ArrayWithNamesAndIndexes = [];
  for (let i = 0; i < arr.length; i++) {
    arrayOfUniqueNames.push(arr[i].name);
  }
  for (let i = 0; i < arrayOfUniqueNames.length; i++) {
    if (elementInArray(arrayOfUniqueNames[i], ArrayWithNamesAndIndexes)) {
      continue;
    } 
    const arrayWithUniqueNameAndIndexes = [];
    let counter = 0;
    for (let j = 0; j < arrayOfUniqueNames.length; j++) {
      if (i !== j) {
        if (arrayOfUniqueNames[i] === arrayOfUniqueNames[j]) {
          counter++;
          if (counter === 1) {
            arrayWithUniqueNameAndIndexes.push(arrayOfUniqueNames[i]);
            arrayWithUniqueNameAndIndexes.push(i);
          }
          arrayWithUniqueNameAndIndexes.push(j);
        }
      }
      if (j === (arrayOfUniqueNames.length - 1) && 
      arrayWithUniqueNameAndIndexes.length > 0) {
        ArrayWithNamesAndIndexes.push([...arrayWithUniqueNameAndIndexes]);
      }
    }
  }
  return ArrayWithNamesAndIndexes;
};

const SummaryOfSameElements = (fullArray, uniqueArray) => {
  for (let i = 0; i < uniqueArray.length; i ++) {
    let clicks = 0;
    let lpClicks = 0;
    let leads = 0;
    let revenue = 0;
    let cost = 0;
    let profit = 0;
    for (let j = 1; j < uniqueArray[i].length; j++) {
      // debugger;
      clicks += +fullArray[uniqueArray[i][j]].clicks;
      lpClicks += +fullArray[uniqueArray[i][j]].lp_clicks;
      leads += +fullArray[uniqueArray[i][j]].leads;
      revenue += +fullArray[uniqueArray[i][j]].revenue;
      cost += +fullArray[uniqueArray[i][j]].cost;
      profit += +fullArray[uniqueArray[i][j]].profit;
    }
    fullArray[uniqueArray[i][1]].clicks = clicks;
    fullArray[uniqueArray[i][1]].lp_clicks = lpClicks;
    fullArray[uniqueArray[i][1]].leads = leads;
    fullArray[uniqueArray[i][1]].revenue = revenue;
    fullArray[uniqueArray[i][1]].cost = cost;
    fullArray[uniqueArray[i][1]].profit = profit;
  }
  return fullArray;
};

const RemoveOfSameElements = (fullArray, uniqueArray) => {
  for (let i = 0; i < uniqueArray.length; i++) {
    let counter = 0;
    for (let j = 0; j < fullArray.length; j++) {
      if (fullArray[j].name === uniqueArray[i][0]) {
        counter++;
        if (counter > 1) {
          fullArray.splice(j, 1);
        }
      }
    }
  }
  fullArray.splice(5114, 1);
  fullArray.splice(2091, 1);
  fullArray.splice(3413, 1);
  fullArray.splice(2072, 1);
  fullArray.splice(5021, 1);
  console.log(fullArray);
  // console.log(findUniqueName(fullArray));
  return fullArray;
};

const elementInArray = (el, arr) => {
  let result = false;
  arr.map(item => {
    if (item[0] === el) {
      result = true;
    }
  });
  return result;
};

dataStructuring()