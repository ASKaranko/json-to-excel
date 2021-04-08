const arrayOfJsonsFiles = ['json10', 'json135', 'json171', 'json220', 'json272', 
'json398', 'json440', 'json484', 'json636', 'json73', 'json100', 'json136', 
'json172', 'json221', 'json273', 'json399', 'json443', 'json485', 'json638', 
'json731', 'json101', 'json137', 'json174', 'json223', 'json274', 'json40', 
'json444', 'json486', 'json64', 'json74', 'json102', 'json14', 'json175', 
'json224', 'json275', 'json400', 'json445', 'json489', 'json641', 'json77',
'json103', 'json140', 'json179', 'json225', 'json277', 'json406', 'json446', 
'json49', 'json642', 'json78', 'json106', 'json141', 'json18', 'json226', 
'json280', 'json407', 'json447', 'json490', 'json643', 'json79', 'json108', 
'json143', 'json181', 'json227', 'json281', 'json408', 'json449', 'json491', 
'json645', 'json8', 'json109', 'json144', 'json182', 'json228', 'json283', 
'json412', 'json45', 'json493', 'json651', 'json80', 'json11', 'json145', 
'json186', 'json229', 'json294', 'json413', 'json452', 'json496', 'json654', 
'json821', 'json112', 'json146', 'json187', 'json230', 'json296', 'json417', 
'json453', 'json497', 'json656', 'json84', 'json113', 'json148', 'json188', 
'json232', 'json297', 'json42', 'json457', 'json5', 'json657', 'json85',
'json114', 'json149', 'json189', 'json233', 'json298', 'json422', 'json458', 
'json501', 'json66', 'json86', 'json115', 'json15', 'json191', 'json235', 
'json300', 'json423', 'json46', 'json502', 'json661', 'json88', 'json116', 
'json152', 'json194', 'json236', 'json301', 'json424', 'json460', 'json51', 
'json662', 'json89', 'json12', 'json153', 'json195', 'json237', 'json305', 
'json425', 'json462', 'json52', 'json666', 'json90', 'json121', 'json154', 
'json196', 'json239', 'json32', 'json426', 'json463', 'json522', 'json667', 
'json91', 'json123', 'json156', 'json198', 'json242', 'json322', 'json427', 
'json464', 'json523', 'json67', 'json92', 'json124', 'json157', 'json199', 
'json243', 'json324', 'json429', 'json465', 'json525', 'json671', 'json93',
'json125', 'json158', 'json20', 'json245', 'json325', 'json43', 'json466', 
'json54', 'json674', 'json94', 'json127', 'json16', 'json204', 'json246', 
'json326', 'json430', 'json47', 'json549', 'json68', 'json95', 'json128', 
'json166', 'json206', 'json250', 'json33', 'json432', 'json471', 'json570', 
'json69', 'json96', 'json13', 'json167', 'json21', 'json263', 'json35', 
'json433', 'json474', 'json587', 'json7',  'json97', 'json131', 'json168', 
'json212', 'json264', 'json37', 'json434', 'json475', 'json594', 'json70', 
'json98', 'json132', 'json169', 'json214', 'json265', 'json383', 'json435', 
'json476', 'json595', 'json71', 'json133', 'json17', 'json217', 'json270', 
'json391', 'json436', 'json479', 'json6', 'json72', 'json134', 'json170', 
'json219', 'json271', 'json396', 'json438', 'json48', 'json619', 'json729'];
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
    const response = await fetch(`./json_full/${name}.txt`);
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
  fullArray.splice(450, 1);
  fullArray.splice(2468, 1);
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

dataStructuring();